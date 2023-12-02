/** @format */

import { tokens } from '../grammar/tokens';

// The parser function receives the script as string
// and performs a series of string replacements to turn
// the provided valhalla script into javascript, that
// can then be executed by node
export const parser = (script: string): string => {
    [...tokens.entries()].forEach(([token, replace]) => {
        script = script.replaceAll(token, (r) => {
            return replace(r);
        });
    });

    return script.replace(/ø/gim, ''); // remove the escape character
};
