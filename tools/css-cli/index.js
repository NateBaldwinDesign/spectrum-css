#!/usr/bin/env node

import { join } from "path";
import argv from "./lib/args.js";
import { main as builder } from "./lib/builder.js";
import { dirs } from "./lib/utilities.js";

let input = argv._;
const { command } = argv;

console.log(argv);

if (command === "build") builder({
	componentName: input?.[1],
	cwd: join(dirs.components, input?.[1]),
});

// if (argv.env) process.env.NODE_ENV = argv.env;

// let { isTTY } = process.stdin;

// if (process.env.FORCE_IS_TTY === "true") {
// 	isTTY = true;
// }

// if (argv.watch && isTTY) {
// 	process.stdin.on("end", () => process.exit(0));
// 	process.stdin.resume();
// }

// /* istanbul ignore next */
// if (parseInt(postcss().version) < 8) {
// 	error("Please install PostCSS 8 or above");
// }

// if (argv.watch && !(argv.output || argv.replace || argv.dir)) {
// 	error("Cannot write to stdout in watch mode");
// 	// Need to explicitly exit here, since error() doesn't exit in watch mode
// 	process.exit(1);
// }


// if (argv.watch) {
// 	error("Input Error: Cannot run in watch mode when reading from stdin");
// }
