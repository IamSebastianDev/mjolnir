/** @format */

import pkg from '../../package.json';

export const injectPragma = () => {
    return `/** Script compiled with @iasd/mjolnir@${pkg.version} */`;
};
