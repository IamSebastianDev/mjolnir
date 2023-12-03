/** @format */

import { funcs, imports } from '../grammar/std';

export const injectStandardLibrary = (script: string) => {
    return [
        `/** Imports */`,
        Object.entries(imports)
            .map(([key, val]) => `import {${val.join(',')}} from "${key}";`)
            .join('\n'),
        `/** Methods */`,
        Object.entries(funcs)
            .filter(([key]) => script.includes(key)) // Remove all methods that are not used
            .map(([key, def]) => `const ${key} = ${def}`)
            .join('\n'),
        `/** Script */`,
    ].join('\n\n');
};
