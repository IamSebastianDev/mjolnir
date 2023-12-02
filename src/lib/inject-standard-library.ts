/** @format */

import { funcs, imports } from '../grammar/std';

export const injectStandardLibrary = () => {
    return [
        `/** Imports */`,
        Object.entries(imports)
            .map(([key, val]) => `import {${val.join(',')}} from "${key}";`)
            .join('\n'),
        `/** Methods */`,
        Object.entries(funcs)
            .map(([key, def]) => `const ${key} = ${def}`)
            .join('\n'),
        `/** Script */`,
    ].join('\n\n');
};
