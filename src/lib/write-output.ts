/** @format */

import { resolve } from 'node:path';
import { root } from '../utils/root.util';
import { mkdir, writeFile } from 'node:fs/promises';

export const writeOutput = async (file: string, parsed: string, output: string | undefined) => {
    if (!output) return;
    const [fileName, ...rest] = file.split('/').reverse();
    const handle = resolve(root(output), fileName.replace('vh', 'js'));
    await mkdir(root(output), { recursive: true });
    await writeFile(handle, parsed, 'utf-8');
};
