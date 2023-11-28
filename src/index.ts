#!/usr/bin/env node
/** @format */

import { log, parser, writeOutput, processResult, getMetaData } from './lib';
import { CMDArgs } from './types';
import { readFile } from 'node:fs/promises';
import { root } from './utils/root.util';

// Get and parse the command line parameters
const [, , ...argv] = process.argv;
const args: CMDArgs = Object.fromEntries([
    // defaults
    ['temp', './.temp'],
    ['quiet', false],
    ['debug', false],
    ['defer', false],
    // user provided input
    ...argv.map((arg) => {
        const [key, value] = arg.split('=');
        const propKey = key.replaceAll('-', '');
        return [propKey, value ?? true];
    }),
]);

(async (args: CMDArgs) => {
    const { file, debug: enableDebug, quiet } = args;
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
    const { defer, output, temp } = args;
    // If defer is true and output is false, no action should be taken
    if (defer && !output) return;
    // If output is true, the file should be created and placed in the output specified
    try {
        await writeOutput(file, parsed, output);
    } catch (e) {
        error(`Could not write output: ${e}`);
    }
    // if defer is false and temp is provided, a temp file is created and executed, and then deleted
    try {
        const result = await processResult(temp, parsed, defer);
        console.log(result);
    } catch (e) {
        error(`Could not process result: ${e}`);
    }

    // Write Compile Meta Data
    const metaData = await getMetaData(file);
    info('Compiler meta-data: ', { metaData });
})(args);
