/** @format */

import { pragma } from '../grammar/pragma';
import { std } from '../grammar/std';

export const injectStandardLibrary = (parsed: string) => {
    const lib = Object.entries(std)
        .map(([key, val]) => `import {${val.join(',')}} from "${key}";`)
        .join('\n');
    return `/** Standard Library */\n\n` + lib + `\n\n` + pragma + `\n\n` + parsed;
};
