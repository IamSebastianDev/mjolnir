<!-- @format -->

# @iasd/Mjolnir

Compiler for ValhallaScript. A completely ridiculous, unnecessary attempt at creating an esolang. I had my reasons.

## Introduction

Mjolnir is a command-line tool for parsing ValhallaScript files (.vh) and converting them into JavaScript files (.js). ValhallaScript is an esoteric programming language inspired by Norse mythology, and this parser aims to make it easier to work with Valhalla script code.

## Prerequisites

Before using the ValhallaScript Parser (Transpiler?), ensure you have the following dependencies installed:

-   Node.js: You need Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

## Installation

```bash
$ yarn add @iasd/mjolnir
# or
$ npm install @iasd/mjolnir
```

## Usage

You can use the ValhallaScript Parser (Transpiler?) from the command line. Here's the basic usage:

```bash
yarn mjolnir --file=./index.vh --output=./build
# or
npm mjolnir --file=./index.vh --output=./build
```

### Options

-   `--file=<input>`: Specifies the input `ValhallaScript` file.

-   `--output=<output-dir>`: Specify the output directory for the generated JavaScript file. By default, no output is created.

-   `--temp=<temp-dir>`: Specify a temporary directory for intermediate files. Default is `./.temp`.

-   `--quiet`: Suppress informational messages.

-   `--debug`: Enable debug mode, which includes additional logging.

-   `--defer`: Defer execution of the generated JavaScript code. The JavaScript file will be created, but it won't be executed.

-   `--pragma`: Add a pragma to the output

### Example

Here's an example of how to use the Valhalla Script Parser:

```bash
yarn mjolnir --file=index.vh --output=./build
```

In this example, `index.vh` will be parsed, and the resulting JavaScript code will be saved in the `./build` directory. If the `--defer` option is not used, the JavaScript code will also be executed.

### Hello World

Here is a `Hello World` implementation.

```vh
carve rune navn | `Fynn`; // create the variable 'navn'
skæld∫inscribe<»Hej « + navn>; // logs `Hej Fynn`
```

## ValhallaScript Language

ValhallaScript is a unique esoteric programming language. It includes the following key features:

-   `<` and `>`: Represent opening and closing parentheses.
-   `(*)`: Translates to `=>` in JavaScript.
-   `|`: Translates to `=` in JavaScript.
-   `carve rune`: Translates to `let` in JavaScript.
-   `carve saga`: Translates to `const` in JavaScript.
-   `«` and `»`: Represent a string as a JavaScript backtick.
-   `∆∞` & `∞∆`: Represents square brackets.
-   `∫`: Represents the property access `.`
-   `<∂` & `∂>`: Represents curly braces.
-   `ansuz` & `hagalaz`: Represents `true` & `false` respectively.
-   `∑` & `!∑`: Represents `if` & `else`.
-   `mimir` & `from`: Represents `for...of` to start a for...of loop

## Escaping

Preceding any of the provided tokens / keywords with an `ø` will escape the character and stop the transpilation.

## ValhallaScript Standard Library

A certain set of functions are imported by default. No other imports are available (as of yet. Probably never.)

-   `skæld`: Transpiles to `console` in JavaScript.
-   `inscribe`: Transpiles to `log` in JavaScript.
-   `runestone`: Transpiles to `Object.entries` in JavaScript.

## Contributing

If you would like to contribute, take a look at the [Contribution Guide](./contributing.md). Contributors of any skill level are
appreciated, if you have any questions, feel free to reach out.

## License

`Mjolnir` is licensed under the [MIT License](https://opensource.org/licenses/MIT)

## Acknowledgments

Valhalla Script Parser uses the following open-source libraries:

-   [chalk](https://www.npmjs.com/package/chalk)
