/** @format */

export const tokens = new Map<RegExp, (r: string) => string>([
    [new RegExp(/(?<!ø)\<(?!∂)/gim), (r: string) => '('],
    [new RegExp(/(?<![∂ø=])\>/gim), (r: string) => ')'],
    [new RegExp(/(?<!ø)\(\*\)/gim), (r: string) => '=>'],
    [new RegExp(/(?<!ø)†/gim), (r: string) => ' = '],
    [new RegExp(/(?<!ø)\|{3}/gim), (r: string) => '==='],
    [new RegExp(/(?<!ø)carve rune/gim), (r: string) => 'let '],
    [new RegExp(/(?<!ø)carve saga/gim), (r: string) => 'const '],
    [new RegExp(/(?<!ø)inscribe/gim), (r: string) => 'log'],
    [new RegExp(/(?<!ø)skæld/gim), (r: string) => 'console'],
    [new RegExp(/(?<!ø)runestone/gim), (r: string) => 'Object.entries'],
    [new RegExp(/(?<!ø)»[^»]*«/gim), (r: string) => r.replace('»', '`').replace('«', '`')],
    [new RegExp(/(?<!ø)\∫/gim), (r: string) => '.'], // replaces the property access dot
    [new RegExp(/(?<!ø)<∂/gim), (r: string) => `{`],
    [new RegExp(/(?<!ø)∂>/gim), (r: string) => `}`],
    [new RegExp(/(?<!ø)∆∞/gim), (r: string) => `[`],
    [new RegExp(/(?<!ø)∞∆/gim), (r: string) => `]`],
    [new RegExp(/(?<!ø)ansuz/gim), (r: string) => `true`],
    [new RegExp(/(?<!ø)hagalaz/gim), (r: string) => `false`],
    [new RegExp(/(?<!ø)!∑/gim), (r: string) => `else`],
    [new RegExp(/(?<!ø)∑/gim), (r: string) => `if`],
    [new RegExp(/(?<!ø)from/gim), (r: string) => `of`],
    [new RegExp(/(?<!ø)mimir/gim), (r: string) => `for`],
]);
