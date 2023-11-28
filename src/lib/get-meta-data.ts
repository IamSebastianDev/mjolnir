/** @format */

import { readFile, stat } from 'node:fs/promises';
import { resolve } from 'node:path';
import { root } from '../utils/root.util';
import { MetaData } from '../types/meta-data.type';

export const getMetaData = async (file: string): Promise<MetaData> => {
    const handle = resolve(root(file));
    const script = await readFile(handle, { encoding: 'utf-8' });
    const loc = script.split('\n').length;
    const { size } = await stat(handle);

    return { loc, size: `${size}b` };
};
