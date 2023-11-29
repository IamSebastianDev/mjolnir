/** @format */

import { readFile, stat } from 'node:fs/promises';
import { resolve } from 'node:path';
import { root } from '../utils/root.util';
import { MetaData } from '../types/meta-data.type';
import { performance } from './performance';

export const getMetaData = async (file: string, perf: ReturnType<typeof performance>): Promise<MetaData> => {
    const handle = resolve(root(file));
    const script = await readFile(handle, { encoding: 'utf-8' });
    const loc = script.split('\n').length;
    const { size } = await stat(handle);
    const elapsedRaw = perf.stop();
    const elapsedInSec = perf.inSec(elapsedRaw);

    return { loc, size: `${size}b`, elapsedInSec, elapsedRaw };
};
