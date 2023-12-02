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
    [new RegExp(/(?<!ø)destine/gim), (r: string) => 'return'],
    // Objects
    [new RegExp(/(?<!ø)runestone/gim), (r: string) => 'Object'],
    [new RegExp(/(?<!ø)futhark/gim), (r: string) => 'fromEntries'],
    [new RegExp(/(?<!ø)glyphs/gim), (r: string) => 'entries'],
    [new RegExp(/(?<!ø)essence/gim), (r: string) => 'values'],
    [new RegExp(/(?<!ø)sigils/gim), (r: string) => 'keys'],
    // Async Await / Promises
    [new RegExp(/(?<!ø)woven/gim), (r: string) => 'async'],
    [new RegExp(/(?<!ø)scry/gim), (r: string) => 'await'],
    [new RegExp(/(?<!ø)freyasOath/gim), (r: string) => 'new Promise'],

    // Switch Case
    [new RegExp(/(?<!ø)choose/gim), (r: string) => 'switch'],
    [new RegExp(/(?<!ø)path/gim), (r: string) => 'case'],

    [new RegExp(/(?<!ø)rest/gim), (r: string) => 'break'],
]);
