/*!
 * Copyright 2024 Adobe. All rights reserved.
 *
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at <http://www.apache.org/licenses/LICENSE-2.0>
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

/* eslint-disable no-console */

const fs = require("fs");
const fsp = fs.promises;
const path = require("path");

const fg = require("fast-glob");
const postcss = require("postcss");
const postcssrc = require("postcss-load-config");
const prettier = require("prettier");

require("colors");

/**
 * A source of truth for commonly used directories
 * @type {object} dirs
 * @property {string} dirs.root
 * @property {string} dirs.components
 * @property {string} dirs.site
 * @property {string} dirs.publish
 */
const dirs = {
	root: path.join(__dirname, ".."),
	components: path.join(__dirname, "../components"),
	site: path.join(__dirname, "../site"),
	publish: path.join(__dirname, "../dist"),
	tokens: path.join(__dirname, "../tokens"),
};

/**
 * A utility to resolve the prettier settings and format the content
 * @param {string} content
 * @param {object} [options={}]
 * @param {string} [options.filePath=process.cwd()] - The file path to resolve the prettier settings from
 * @param {object} [prettierSettings={}] - Additional prettier settings to apply
 * @returns {Promise<string>}
*/
async function pretty(content, {
	filepath = process.cwd(),
	...prettierSettings
} = {}) {
	let options = fs.existsSync(filepath) ? await prettier.resolveConfig(filepath) : {};
	// Combine the prettier settings with the provided settings
	options = { printWidth: 500, ...options, ...prettierSettings };

	// If no parser was provided or inferred, return the string as is
	if (typeof options?.parser == "undefined" || path.extname(filepath).endsWith("map")) {
		return content;
	}

	return prettier.format(content?.trim(), options);
}

/** @type {(string) => string} */
const relativePrint = (filename, { cwd = dirs.root }) => path.relative(cwd, filename);

const bytesToSize = function (bytes) {
	if (bytes === 0) return "0";

	const sizes = ["bytes", "KB", "MB", "GB", "TB"];
	// Determine the size identifier to use (KB, MB, etc)
	const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
	if (i === 0) return (bytes / 1000).toFixed(2) + " " + sizes[1];
	return (bytes / Math.pow(1024, i)).toFixed(2) + " " + sizes[i];
};

/**
 * Determines the package name from a file path
 * @param {string} filePath
 * @returns {string}
 */
function getPackageFromPath(filePath = process.cwd()) {
	const parts = filePath.split(path.sep);

	// Capture component name from a local or node_modules syntax
	if (parts.includes("components") || parts.includes("@spectrum-css")) {
		const index = parts.indexOf("components") ?? parts.indexOf("@spectrum-css");
		return parts[index + 1];
	}

	// Check local root-level packages such as ui-icons & tokens
	if (parts.includes("ui-icons")) return "ui-icons";
	if (parts.includes("tokens")) return "tokens";

	// This is a fallback best-guess scenario:
	// Split the path from root dir and capture the first folder as the package name
	const guessParts = path.relative(dirs.root, filePath).split(path.sep);
	return guessParts[0];
}

/**
 * This regex will find all the custom properties that start with --mod-
 * and are defined inside a var() function. The last capture group will
 * ignore any mod properties that are followed by a colon, to exclude
 * sub-component passthrough properties that should not be listed as mods.
 * @param {string} content
 * @param {RegExp} [regex=]
 * @returns Set<string>
 */
async function extractProperties(
	content,
	regex = /(--mod-(?:\w|-)+)(?!:|\w|-)/g
) {
	if (!content) return new Set();

	// assign the matches to an array through the spread operator and map the results to the first capture group
	return new Set([...content.matchAll(regex)].map((match) => match[1]) ?? []);
}

/**
 * Extract custom property modifers to report
 * @param {string} filepath
 * @param {object} [options={}]
 * @returns Promise<string|string[]|void>
 */
async function extractModifiers(filepath, { cwd } = {}) {
	if (!fs.existsSync(filepath)) return Promise.resolve();

	const content = await fsp.readFile(filepath, { encoding: "utf-8" });

	/* Remove duplicates using a Set and sort the results (default is alphabetical) */
	const found = await extractProperties(content);
	const spectrum = await extractProperties(content, /(--spectrum-(?:\w|-)+)(?!:|\w|-)/g);
	const system = await extractProperties(content, /(--system-(?:\w|-)+)(?!:|\w|-)/g);
	const highContrast = await extractProperties(content, /(--highcontrast-(?:\w|-)+)(?!:|\w|-)/g);

	const selectors = new Set();
	const root = postcss.parse(content);
	root.walkRules(rule => {
		if (rule.selector) selectors.add(rule.selector);
	});

	return Promise.all([
		// Write the metadata to a markdown file
		writeAndReport(
			[
				"| Modifiable custom properties |\n| --- |",
				...[...found].sort().map((result) => `| \`${result}\` |`),
			].join("\n"),
			path.join(cwd, "metadata/mods.md"),
			{ cwd, isDeprecated: true, parser: "markdown" }
		),
		// Write the metadata to a JSON file
		writeAndReport(
			JSON.stringify({
				selectors: [...selectors].sort(),
				mods: [...found].sort(),
				spectrum: [...spectrum].sort(),
				system: [...system].sort(),
				a11y: [...highContrast].sort(),
			}),
			path.join(cwd, "dist/metadata.json"),
			{ cwd, parser: "json" }
		).then((reports) => [
			reports,
			`🔍  ${`${found.size}`.underline} modifiable custom propert${found.size === 1 ? "y" : "ies"}`,
			`🔍  ${`${selectors.size}`.underline} selector${found.size === 1 ? "" : "s"}`,
		])
	]);
}

/**
 * If the output directory does not exist, create it (recursively)
 * @param {string} output - The output file path
 * @param {object} [options={}]
 * @param {string} [options.cwd=] - The current working directory, used for relative path printing
 * @returns Promise<void>
 */
async function makeOutputDir(output, { cwd = process.cwd() } = {}) {
	const outputDir = path.dirname(output);
	if (fs.existsSync(outputDir)) return Promise.resolve();

	return fsp.mkdir(outputDir, { recursive: true }).catch((err) => {
		if (!err) return;
		return Promise.reject(
			new Error(`${"✗".red}  problem making the ${relativePrint(outputDir, { cwd }).yellow} directory`)
		);
	});
}

/**
 * If the output directory does not exist, create it (recursively)
 * @param {string} content - The content to write to the file
 * @param {string} filepath - The output file path
 * @param {object} [options={}]
 * @param {string} [options.cwd=process.cwd()] - The current working directory, used for relative path printing
 * @param {string} [options.isDeprecated=false] - If true, the file is marked as deprecated
 * @returns Promise<string|void>
 */
async function writeAndReport(content, filepath, {
	cwd = process.cwd(),
	isDeprecated = false,
	parser = "css"
} = {}) {
	// If the content is empty, return early
	if (!content || content.trim() === "") return Promise.resolve();

	// Ensure the output directory exists
	await makeOutputDir(filepath, { cwd });

	// If the file is marked as deprecated, inject a deprecation notice
	if (isDeprecated) await injectDeprecationNotice(content, { filepath });

	return pretty(content, { filepath, parser }).then(formatted =>
		fsp.writeFile(filepath, formatted).then(() => {
			const stats = fs.statSync(filepath);
			return `${"✓".green}  ${relativePrint(filepath, { cwd }).padEnd(20, " ").yellow}  ${bytesToSize(stats.size).gray}  ${isDeprecated ? "-- deprecated --".gray : ""}`;
		}).catch(() => {
			return `${"✗".red}  ${relativePrint(filepath, { cwd }).yellow} not written`;
		})
	);
}

/**
 * Process the provided CSS input and write out to a file
 * @param {string} content
 * @param {string} input
 * @param {string} output
 * @param {object} [options={}]
 * @param {string} [options.cwd=]
 * @param {boolean} [options.clean=false]
 * @param {import('postcss-load-config').ConfigContext} [options.postCSSOptions]
 * @returns {Promise<(string|void)[]>} Returns either the CSS content or void
 */
async function processCSS({
	cwd,
	/* eslint-disable-next-line no-unused-vars */
	clean = false,
	content,
	input,
	output,
	configPath = __dirname,
	...postCSSOptions
} = {}) {
	if (!content) return Promise.reject(new Error("This function requires content be provided"));

	// Load the PostCSS configuration from the provided path
	const { plugins, options } = await postcssrc(
		{
			cwd,
			env: process.env.NODE_ENV ?? "development",
			verbose: false,
			...postCSSOptions,
			from: input,
			to: output,
		},
		configPath // This is the path to the directory where the postcss.config.js lives
	);

	// Process the CSS content through PostCSS with the loaded config settings
	const result = await postcss(plugins).process(content, {
		from: input,
		to: output,
		...options
	});

	// Check for any errors during processing, and reject if found
	if (result.error) return Promise.reject(result.error);

	// If no CSS was generated, reject the promise with an error
	if (!result.css) {
		return Promise.reject(
			new Error(`No CSS was generated from the provided content for ${relativePrint(input, { cwd })}`)
		);
	}

	// Ensure the output directory exists
	await makeOutputDir(output, { cwd });

	// Return once all the promises have resolved
	return Promise.all([
		// Push the resulting CSS content through Prettier before writing it to the file system
		writeAndReport(result.css, output, { cwd }),
		// If a source map was generated, write it out to the file system
		result.map ? writeAndReport(result.map.toString().trimStart(), `${output}.map`, { cwd }) : Promise.resolve(),
	]);
}

/**
 * Inject a deprecation notice into the content after the copyright
 * @param {string} filepath - The file path to inject the notice into
 */
async function injectDeprecationNotice(content, {
	notice = "This file will be removed in a future release",
	filepath,
} = {}) {
	const ext = filepath && path.extname(filepath).replace(".", "")?.toLowerCase();

	let commentFormat = "\n/* @deprecation: %s */\n\n";
	switch (ext) {
		case "md":
		case "markdown":
			commentFormat = "\n_Note_: %s.\n\n";
			break;
		case "js":
			commentFormat = "\n/** @deprecation: %s */\n\n";
			break;
	}

	notice = commentFormat.replace("%s", notice);

	// Parse the content with to find where the copyright notice ends
	// and inject the deprecation notice after it; should work for CSS and JS
	const lines = content.split("\n");
	const index = lines.findIndex(line => line.toLowerCase().includes("copyright"));
	// If the match is found, inject the deprecation notice after the comment block
	// by reading in the subsequent lines and finding the closing comment tag */
	if (index > -1) {
		const closingComment = lines.slice(index).findIndex(line => line.includes("*/"));
		if (closingComment > -1) {
			// Inject the deprecation notice after the closing comment tag
			lines.splice(index + closingComment + 1, 0, notice);
		}
	}
	else {
		// If no match is found, inject the deprecation notice at the top of the file
		lines.unshift(notice);
	}

	return lines.join("\n");
}

/**
 * Fetch content from glob input and optionally combine results
 * @param {(string|RegExp)[]} globs
 * @param {object} options
 * @param {string} [options.cwd=]
 * @param {string} [options.shouldCombine=false] If true, combine the assets read in into one string
 * @param {import('fast-glob').Options} [options.fastGlobOptions={}] Additional options for fast-glob
 * @returns {Promise<{ content: string, input: string }[]>}
 */
async function fetchContent(globs = [], {
	cwd,
	shouldCombine = false,
	...fastGlobOptions
} = {}) {
	const files = await fg(globs, {
		onlyFiles: true,
		...fastGlobOptions,
		cwd,
	});

	if (!files.length) return Promise.resolve([]);

	const fileData = await Promise.all(
		files.map(async (file) => ({
			input: path.join(cwd, file),
			content: await fsp.readFile(path.join(cwd, file), "utf8")
		}))
	);

	// Combine the content into 1 file; @todo do this in future using CSS imports
	if (shouldCombine) {
		let content = "";
		fileData.forEach(dataset => {
			if (dataset.content) content += "\n\n" + dataset.content;
		});

		return Promise.resolve([{
			content,
			input: fileData[0].input
		}]);
	}

	return Promise.all(
		files.map(async (file) => ({
			content: await fsp.readFile(path.join(cwd, file), "utf8"),
			input: file,
		}))
	);
}

/**
 * A utility to copy a file from one local to another
 * @param {string} from
 * @param {string} to
 * @param {object} [config={}]
 * @param {string} [config.cwd=process.cwd()] - Current working directory for the component being built
 * @param {boolean} [config.isDeprecated=true] - Should the file be marked as deprecated
 * @returns Promise<string|void>
 */
async function copy(from, to, {
	cwd = process.cwd(),
	isDeprecated = false
} = {}) {
	// If the source file doesn't exist, return early
	if (!fs.existsSync(from)) return Promise.resolve();

	// Read in the content of the source file
	const content = await fsp.readFile(from, { encoding: "utf-8" });

	/** @todo add support for injecting a deprecation notice as a comment after the copyright */
	return writeAndReport(content, to, { cwd, isDeprecated });
}

/**
 * The builder for the main entry point
 * @param {object} config
 * @param {string} config.cwd - Current working directory for the component being built
 * @returns Promise<void>
 */
async function cleanFolder({ cwd = process.cwd() } = {}) {
	const outputDir = path.join(cwd, "dist");

	// Nothing to do if there's no input file
	if (!fs.existsSync(outputDir)) return Promise.resolve();

	await fsp.rm(outputDir, { recursive: true, force: true });
	return makeOutputDir(outputDir);
}

/**
 * The builder for the main entry point
 * @param {object} config
 * @param {string} config.cwd - Current working directory for the component being built
 * @param {boolean} config.clean - Should the built assets be cleaned before running the build
 * @returns Promise<void>
 */
async function build({ cwd = process.cwd(), clean = false } = {}) {
	const entryFilename = "index.css";
	const entryFile = path.join(cwd, entryFilename);
	const outputDir = path.join(cwd, "dist");
	const outputFile = path.join(outputDir, entryFilename);

	// Nothing to do if there's no input file
	if (!fs.existsSync(entryFile)) return;

	const componentName = cwd?.split(path.sep)?.pop();
	const content = await fsp.readFile(entryFile, "utf8");

	return Promise.all([
		// index.css
		processCSS({
			cwd,
			clean,
			content,
			input: entryFile,
			output: outputFile,
			lint: true, // Only lint the main entry point
			preserveVariables: true
		}).then(async (reports) =>
			Promise.all([
				// After building, extract the available modifiers
				extractModifiers(outputFile, { cwd }),
				// Copy index.css to index-vars.css for backwards compat, log as deprecated
				copy(outputFile, path.join(outputDir, "index-vars.css"), { cwd }),
			]).then(r => [r, ...reports]) // Return the console output to be logged
		),
		// index-base.css
		processCSS({
			cwd,
			clean,
			content,
			input: entryFile,
			output: path.join(outputDir, "index-base.css"),
			preserveVariables: false,
			referencesOnly: true,
		}),
		// The same as index-base but built without any mapping for a production environment
		processCSS({
			cwd,
			clean,
			content,
			input: entryFile,
			output: path.join(dirs.tokens, "components", "bridge", `${componentName}.css`),
			env: "production",
			preserveVariables: false,
			referencesOnly: true,
		}).then(async (reports) => copy(
			path.join(dirs.tokens, "components", "bridge", `${componentName}.css`),
			path.join(dirs.tokens, "dist", "css", "components", "bridge", `${componentName}.css`),
			{ cwd }
		).then(r => [...reports, r])),
	]);
}

/**
 * The builder for the individual themes assets
 * @param {object} config
 * @param {string} config.cwd - Current working directory for the component being built
 * @param {boolean} config.clean - Should the built assets be cleaned before running the build
 * @returns Promise<void>
 */
async function buildThemes({ cwd = process.cwd(), clean = false } = {}) {
	// This fetches the content of the files and returns an array of objects with the content and input paths
	const contentData = await fetchContent(["themes/*.css"], { cwd, clean });
	const componentName = cwd?.split(path.sep)?.pop();

	// Nothing to do if there's no content
	if (!contentData || contentData.length === 0) return;

	return Promise.all(
		// Iterate over the content data and build the assets
		contentData.map(async ({ content, input }) => {
			const entryFilename = path.basename(input);
			const entryFile = path.join(cwd, input);
			const outputDir = path.join(cwd, "dist");
			const outputFile = path.join(outputDir, input);

			// Determine if the input is the express theme by splitting the postfixes from the file name
			const theme = entryFilename && entryFilename?.split(".").shift() || "spectrum";
			const isExpress = Boolean(theme === "express");
			return Promise.all([
				processCSS({
					cwd,
					clean,
					content,
					input: entryFile,
					output: outputFile,
				}),
				// The same output as the themes/*.css above but built without any mapping for a production environment
				processCSS({
					cwd,
					clean,
					content,
					input: entryFile,
					output: path.join(dirs.tokens, "components", theme, `${componentName}.css`),
					env: "production",
				}).then(async (reports) => {
					// Copy the built theme component tokens to the tokens package folder in src and dist output
					// (dist included b/c tokens are typically built before components in the build order)
					return copy(
						path.join(dirs.tokens, "components", theme, `${componentName}.css`),
						path.join(dirs.tokens, "dist", "css", "components", theme, `${componentName}.css`),
						{ cwd }
					).then(r => [...reports, r]);
				}),
				// Additional processing for the express output because it includes both it and spectrum's content
				// @note: this will be sourced from the index.css asset in the S2 build
				isExpress ? processCSS({
					cwd,
					clean,
					content,
					input: entryFile,
					output: path.join(outputDir, "index-theme.css"),
				}) : Promise.resolve(),
			]);
		})
	);
}

/**
 * The main entry point for this tool; this builds a CSS component
 * @param {object} config
 * @param {string} [config.componentName=process.env.NX_TASK_TARGET_PROJECT] - Current working directory for the component being built
 * @param {string} [config.cwd=] - Current working directory for the component being built
 * @param {boolean} [config.clean=false] - Should the built assets be cleaned before running the build
 * @returns Promise<void>
 */
async function main({
	componentName = process.env.NX_TASK_TARGET_PROJECT,
	cwd,
	clean,
} = {}) {
	if (!cwd && (componentName)) {
		cwd = path.join(dirs.components, componentName);
	}

	if (!componentName) {
		componentName = cwd ? getPackageFromPath(cwd) : process.env.NX_TASK_TARGET_PROJECT;
	}

	if (typeof clean === "undefined") {
		clean = process.env.NODE_ENV === "production";
	}

	const key = `[build] ${`@spectrum-css/${componentName}`.cyan}`;
	console.time(key);

	return Promise.all([
		...(clean ? [cleanFolder({ cwd })] : []),
		build({ cwd, clean }),
		buildThemes({ cwd, clean }),
	]).then((report) => {
		const logs = report.flat(Infinity).filter(Boolean);

		console.log(`\n\n${key} 🔨`);
		console.log(`${"".padStart(30, "-")}`);

		if (logs && logs.length > 0) {
			logs.sort((a,) => {
				if (a.includes("✓")) return -1;
				if (a.includes("🔍")) return 0;
				return 1;
			}).forEach(log => console.log(log));
		}
		else console.log("No assets created.".gray);

		console.log(`${"".padStart(30, "-")}`);
		console.timeEnd(key);
		console.log("");

	}).catch((err) => {

		console.log(`\n\n${key} 🔨`);
		console.log(`${"".padStart(30, "-")}`);

		console.trace(err);

		console.log(`${"".padStart(30, "-")}`);
		console.timeEnd(key);
		console.log("");

		process.exit(1);
	});
}

exports.processCSS = processCSS;
exports.fetchContent = fetchContent;
exports.default = main;
