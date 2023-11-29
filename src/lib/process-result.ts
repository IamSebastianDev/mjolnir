/** @format */

import { resolve } from 'node:path';
import { root } from '../utils/root.util';
import { mkdir, rm, writeFile } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';

export const processResult = async (temp: string, parsed: string, defer: boolean = false) => {
    if (!(!defer && temp)) return;
    const handle = resolve(root(temp), '.temp.js');

    await mkdir(root(temp), { recursive: true });
    await writeFile(handle, parsed, 'utf-8');

    const { stderr, stdout } = spawnSync('node', [handle], { encoding: 'utf-8' });
    await rm(root(temp), { recursive: true, force: true });
    if (stderr) throw new Error(stderr);
    return stdout;
};
