#!/usr/bin/env node
/** @format */

import { log, parser, writeOutput, processResult, getMetaData, performance, injectStandardLibrary } from './lib';
import { CMDArgs } from './types';
import { readFile } from 'node:fs/promises';
import { root } from './utils/root.util';
import chalk from 'chalk';

// Get and parse the command line parameters
const [, , ...argv] = process.argv;
const args: CMDArgs = Object.fromEntries([
    // defaults
    ['temp', './.temp'],
    ['quiet', false],
    ['debug', false],
    ['defer', false],
    ['pragma', false],
    // user provided input
    ...argv.map((arg) => {
        const [key, value] = arg.split('=');
        const propKey = key.replaceAll('-', '');
        return [propKey, value ?? true];
    }),
]);

(async (args: CMDArgs) => {
    const perf = performance();
    const { file, debug: enableDebug, quiet, pragma } = args;
    const { info, debug, error } = log(quiet, enableDebug);
    if (!file || typeof file !== 'string') {
        error(`No input to compile found.`);
    }
    info(`Parsing file at --> ${file}`);
    debug(
        `${Object.entries(args)
            .map(([key, value]) => `${key}:${value}`)
            .join(', ')}`
    );

    let script;
    try {
        script = await readFile(root(file), 'utf-8');
        if (script.length === 0) throw new Error();
    } catch (e) {
        error(`No file found at the specified location`);
        return;
    }

    if (script) debug(script);
    const parsed = parser(script);
    const compiled = injectStandardLibrary(parsed, pragma);
    const { defer, output, temp } = args;
    // If defer is true and output is false, no action should be taken
    if (defer && !output) return;
    // If output is true, the file should be created and placed in the output specified
    try {
        await writeOutput(file, compiled, output);
    } catch (e) {
        error(`Could not write output: ${e}`);
    }

    // if defer is false and temp is provided, a temp file is created and executed, and then deleted
    let result;
    try {
        result = await processResult(temp, compiled, defer);
    } catch (e) {
        error(`Could not process result. The parsing completed, but there is an error inside the transpiled file. 
        Original error: ${e}`);
    }

    // Write Compile Meta Data
    const { loc, elapsedInSec, elapsedRaw, size } = await getMetaData(file, perf);
    info(`Success! Compiled in ${elapsedInSec}s. 🚀
  
      ${chalk.bgGreenBright.underline('Statistics:                     ')}
  
      Lines of code:          ${loc}
      Size (in b):            ${size}
      Time (in sec/ms):       ${elapsedInSec}s/ ${chalk.bgBlue(elapsedRaw + 'ms')} \n`);

    console.log(`\n--------OUTPUT--------\n`);
    console.log(result);
    console.log(`\n----------------------\n`);
})(args);
