/** @format */

export const tokens = new Map<RegExp, string>([
    [new RegExp(/\</gim), '('],
    [new RegExp(/\>/gim), ')'],
    [new RegExp(/\-\-\) /gim), '=>'],
    [new RegExp(/\-\) /gim), '='],
    [new RegExp(/carve rune/gim), 'let '],
    [new RegExp(/carve saga/gim), 'const '],
    [new RegExp(/inscribe/gim), 'console.log'],
    [new RegExp(/runestone/gim), 'process'],
    [new RegExp(/«/gim), '`'],
    [new RegExp(/»/gim), '`'],
]);
