/** @format */
import { join, resolve } from 'node:path';
export const root = (...fragments: string[]) => resolve(process.cwd(), join(...fragments));
