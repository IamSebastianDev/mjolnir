#!/usr/bin/env node
/** @format */

import { log, parser } from './lib';
import { CMDArgs } from './types';
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { root } from './utils/root.util';
import { resolve } from 'node:path';
import { spawn, spawnSync } from 'node:child_process';

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
    if (output) {
        if (existsSync(root(output))) {
            await writeFile(resolve(root(output), file.replace('vh', 'js')), parsed, 'utf-8');
        } else {
            await mkdir(root(output), { recursive: true });
            await writeFile(resolve(root(output), file.replace('vh', 'js')), parsed, 'utf-8');
        }
    }
    // if defer is false and temp is provided, a temp file is created and executed, and then deleted
    if (!defer && temp) {
        if (existsSync(root(temp))) {
            await writeFile(resolve(root(temp), file.replace('vh', 'js')), parsed, 'utf-8');
        } else {
            await mkdir(root(temp), { recursive: true });
            await writeFile(resolve(root(temp), file.replace('vh', 'js')), parsed, 'utf-8');
        }

        const child = spawnSync('node', [resolve(root(temp), file.replace('vh', 'js'))], { encoding: 'utf-8' });
        console.log(`\n-------------------------\n`);
        if (child.stderr) {
            error(child.stderr);
        }
        console.log(`${child.stdout}`);
        rm(root(temp), { recursive: true, force: true });
    }
})(args);
