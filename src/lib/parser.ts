/** @format */

import { tokens } from './tokens';

// The parser function receives the script as string
// and performs a series of string replacements to turn
// the provided valhalla script into javascript, that
// can then be executed by node
export const parser = (script: string): string => {
    [...tokens.entries()].forEach(([token, replace]) => {
        script = script.replaceAll(token, replace);
    });

    return script;
};
