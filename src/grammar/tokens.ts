/** @format */

export const tokens = new Map<RegExp, (r: string) => string>([
    [new RegExp(/\</gim), (r: string) => '('],
    [new RegExp(/\>/gim), (r: string) => ')'],
    [new RegExp(/\-\-\)/gim), (r: string) => '=>'],
    [new RegExp(/[^\|]\|[^\|]/gim), (r: string) => ' = '],
    [new RegExp(/\|{3}/gim), (r: string) => '==='],
    [new RegExp(/carve rune/gim), (r: string) => 'let '],
    [new RegExp(/carve saga/gim), (r: string) => 'const '],
    [new RegExp(/inscribe/gim), (r: string) => 'console.log'],
    [new RegExp(/skæld/gim), (r: string) => 'console'],
    [new RegExp(/runestone/gim), (r: string) => 'process'],
    [new RegExp(/»[^»]*«/gim), (r: string) => r.replace('»', '`').replace('«', '`')],
    [new RegExp(/\∫/gim), (r: string) => '.'], // replaces the property access dot
    [new RegExp(/∆[^∆]*∆/gim), (r: string) => r.replace('∆', '[').replace('∆', ']')],
    [new RegExp(/∂[^∂]*∂/gim), (r: string) => r.replace('∂', '{').replace('∂', '}')],
    [new RegExp(/ansuz/gim), (r: string) => `true`],
    [new RegExp(/hagalaz/gim), (r: string) => `false`],
]);
