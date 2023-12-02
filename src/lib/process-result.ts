/** @format */

import { resolve } from 'node:path';
import { root } from '../utils/root.util';
import { mkdir, rm, writeFile } from 'node:fs/promises';
import { spawn, spawnSync } from 'node:child_process';
import { log } from './logger';

export const processResult = async (temp: string, parsed: string, defer: boolean = false) => {
    const { error, info } = log(false, false);
    if (!(!defer && temp)) return;
    const handle = resolve(root(temp), '.temp.js');

    await mkdir(root(temp), { recursive: true });
    await writeFile(handle, parsed, 'utf-8');

    const file = spawn('node', [handle]);

    file.on('spawn', () => {
        console.log(`\n--------OUTPUT--------\n`);
        ['SIGABRT', 'SIGINT', 'SIGTERM'].forEach((action) => {
            process.on(action, () => {
                file.kill();
                console.log(`\n----------------------\n`);
                rm(root(temp), { recursive: true, force: true });
                info(`Process terminated, shutting down execution. Reason '${action}'`);
                rm(root(temp), { recursive: true, force: true });
            });
        });
    });
    file.stdout.on('data', (message) => {
        process.stdout.write(message);
    });

    file.stderr.on('data', (err) => {
        error(
            `Error during execution: The parsing completed successfully, but the there was an error during execution: 
            
            ${err.toString()}`
        );
        process.exit(1);
    });

    // Handle exits
    ['close'].forEach((action) => {
        file.on(action, () => {
            if (file.killed) return;
            console.log(`\n----------------------\n`);
            rm(root(temp), { recursive: true, force: true });
        });
    });
};
