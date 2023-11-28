/** @format */

export const tokens = new Map<RegExp, string>([
    [new RegExp(/\</gim), '('],
    [new RegExp(/\>/gim), ')'],
    [new RegExp(/\-\-\) /gim), '=>'],
    [new RegExp(/\-\) /gim), '='],
    [new RegExp(/carve rune /gim), 'let '],
    [new RegExp(/carve saga /gim), 'const '],
    [new RegExp(/myrkur/gim), 'console.log'],
    [new RegExp(/«/gim), '`'],
    [new RegExp(/»/gim), '`'],
]);
