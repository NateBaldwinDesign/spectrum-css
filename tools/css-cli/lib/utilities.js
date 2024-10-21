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

import fs, { existsSync, readdirSync, statSync } from "fs";
import { dirname, join, relative, sep } from "path";
const fsp = fs.promises;

import fg from "fast-glob";
import { parse } from "postcss";
import { parse as valuesParser } from "postcss-values-parser";

const __dirname = dirname(new URL(import.meta.url).pathname);

/**
 * A source of truth for commonly used directories
 * @type {object} dirs
 * @property {string} dirs.root
 * @property {string} dirs.components
 * @property {string} dirs.site
 * @property {string} dirs.publish
 */
export const dirs = {
	root: join(__dirname, "../../../"),
	components: join(__dirname, "../../../components"),
	tokens: join(__dirname, "../../../tokens"),
	site: join(__dirname, "../../../site"),
	publish: join(__dirname, "../../../dist"),
	storybook: join(__dirname, "../../../.storybook"),
};

export const timeInMs = (seconds, nanoseconds) => (seconds * 1000000000 + nanoseconds) / 1000000;

/** @type {(string) => string} */
export const relativePrint = (filename, { cwd = dirs.root } = {}) => relative(cwd, filename);

export const bytesToSize = function (bytes) {
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
export function getPackageFromPath(filePath = process.cwd()) {
	const parts = filePath.split(sep);

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
	const guessParts = relative(dirs.root, filePath).split(sep);
	return guessParts[0];
}

/**
 * Returns a list of all component names in the repository
 * @returns string[]
 */
export function getAllComponentNames() {
	// Get a list of all the component names in the components directory that have a package.json file
	// and a list of all the deprecated components in the storybook directory
	// then combine and deduplicate the lists to get a full list of all components
	return [...new Set([
		...readdirSync(dirs.components).filter((file) => existsSync(join(dirs.components, file, "package.json"))),
		...readdirSync(join(dirs.storybook, "deprecated")),
	])];
}

/**
 *
 * @param {string} componentName
 * @returns {true|Error}
 */
export function validateComponentName(componentName) {
	// Get a list of all the component names
	const components = getAllComponentNames();

	// Check if the component name exists in that list
	if (!components.includes(componentName)) {
		return new Error(`Component name "${componentName}" does not exist in the components directory.`);
	}

	return true;
}


/**
 * This regex will find all the custom properties that start with --mod-
 * and are defined inside a var() function. The last capture group will
 * ignore any mod properties that are followed by a colon, to exclude
 * sub-component passthrough properties that should not be listed as mods.
 * @param {string} content
 * @param {{ [string]: (string)[] }} [meta={}]
 * @returns { [string]: string[] }
 */
export function extractProperties(
	content,
	meta = {},
) {
	if (!content) return new Set();

	const found = {};

	// Process CSS content through the valuesParser an postcss to capture
	// all the custom properties defined and used in the CSS
	parse(content).walkDecls((decl) => {
		Object.entries(meta).forEach(([key, values]) => {
			found[key] = found[key] ?? new Set();

			values.forEach((value) => {
				if (decl.prop.startsWith("--") && decl.prop.startsWith(`--${value}-`)) {
					found[key].add(decl.prop);
				}
			});

			// Parse the value of the declaration to extract custom properties
			valuesParser(decl.value).walk((node) => {
				if (node.type !== "word" || !node.isVariable) return;

				// Extract the custom property name from the var() function
				values.forEach((value) => {
					if (node.value.startsWith(`--${value}-`)) {
						found[key].add(node.value);
					}
				});
			});
		});
	});

	// Sort the custom properties alphabetically and return them as an array
	Object.keys(found).forEach((key) => {
		found[key] = [...found[key]].sort();
	});

	return found;
}

/**
 * Remove all files and folders from the provided directory's dist folder
 * @param {object} config
 * @param {string} config.cwd - Current working directory for the component being built
 * @returns Promise<void>
 */
export async function cleanFolder({ cwd = process.cwd() } = {}) {
	// Nothing to do if there's no input file
	if (!existsSync(join(cwd, "dist"))) return Promise.resolve();

	return fsp.rm(join(cwd, "dist"), { recursive: true, force: true }).then(() => fsp.mkdir(join(cwd, "dist")));
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
export async function fetchContent(
	globs = [],
	{ cwd, shouldCombine = false, ...fastGlobOptions } = {},
) {
	const files = await fg(globs, {
		onlyFiles: true,
		...fastGlobOptions,
		cwd,
	});

	if (!files.length) return Promise.resolve([]);

	const fileData = await Promise.all(
		files.map(async (file) => ({
			input: join(cwd, file),
			content: await fsp.readFile(join(cwd, file), "utf8"),
		})),
	);

	// Combine the content into 1 file; @todo do this in future using CSS imports
	if (shouldCombine) {
		let content = "";
		fileData.forEach((dataset) => {
			if (dataset.content) content += "\n\n" + dataset.content;
		});

		return Promise.resolve([
			{
				content,
				input: fileData[0].input,
			},
		]);
	}

	return Promise.all(
		files.map(async (file) => ({
			content: await fsp.readFile(join(cwd, file), "utf8"),
			input: file,
		})),
	);
}

/**
 * A utility to copy a file from one local to another
 * @param {string} from
 * @param {string} to
 * @param {object} [config={}]
 * @param {string} [config.cwd=] - Current working directory for the component being built
 * @returns Promise<string|void>
 */
export async function copy(from, to, { cwd, isDeprecated = true } = {}) {
	if (!existsSync(from)) return;

	if (!existsSync(dirname(to))) {
		await fsp.mkdir(dirname(to), { recursive: true }).catch((err) => {
			if (!err) return;
			console.log(
				`${"✗".red}  problem making the ${relativePrint(dirname(to), { cwd }).yellow} directory`,
			);
			return Promise.reject(err);
		});
	}

	const content = await fsp.readFile(from, { encoding: "utf-8" });
	if (!content) return;
	/** @todo add support for injecting a deprecation notice as a comment after the copyright */
	return fsp
		.writeFile(to, content, { encoding: "utf-8" })
		.then(
			() =>
				`${"✓".green}  ${relativePrint(to, { cwd }).padEnd(20, " ").yellow}  ${isDeprecated ? "-- deprecated --".gray : ""}`,
		)
		.catch((err) => {
			if (!err) return;
			console.log(
				`${"✗".red}  ${relativePrint(from, { cwd }).gray} could not be copied to ${relativePrint(to, { cwd }).yellow}`,
			);
			return Promise.reject(err);
		});
}

/**
 *
 * @param {string} content - The content to write to the output file
 * @param {import("fs").PathLike} output - The path to the output file
 * @param {object} [config={}]
 * @param {string} [config.cwd=] - Current working directory for the component being built
 * @returns Promise<string|void>
 */
export async function writeAndReport(content, output, { cwd = process.cwd() } = {}) {
	return fsp
		.writeFile(
			output,
			content,
			{ encoding: "utf-8" },
		)
		.then(() => {
			const stats = statSync(output);
			const relativePath = relative(cwd, output);
			return [
				`${"✓".green}  ${relativePath.padEnd(20, " ").yellow}  ${bytesToSize(stats.size).gray}`,
			];
		})
		.catch((err) => {
			if (!err) return;
			const relativePath = relative(cwd, output);
			console.log(`${"✗".red}  ${relativePath.yellow} not written`);
			return Promise.reject(err);
		});
}
