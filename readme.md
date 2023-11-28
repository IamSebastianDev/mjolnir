<!-- @format -->

# @iasd/Mjolnir

Compiler for ValhallaScript. A completely ridiculous, unnecessary attempt at creating an esolang. I had my reasons.

## Introduction

Mjolnir is a command-line tool for parsing ValhallaScript files (.vh) and converting them into JavaScript files (.js). ValhallaScript is an esoteric programming language inspired by Norse mythology, and this parser aims to make it easier to work with Valhalla script code.

## Prerequisites

Before using the Valhalla Script Parser, ensure you have the following dependencies installed:

-   Node.js: You need Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

## Installation

```bash
$ yarn add @iasd/mjolnir
# or
$ npm install @iasd/mjolnir
```

## Usage

You can use the Valhalla Script Parser from the command line. Here's the basic usage:

```bash
npm mjolnir --file=./index.vh --output=./build/
```

### Options

-   `--file=<input>`: Specifies the input `ValhallaScript` file.

-   `--output=<output-dir>`: Specify the output directory for the generated JavaScript file. By default, no output is created.

-   `--temp=<temp-dir>`: Specify a temporary directory for intermediate files. Default is `./.temp`.

-   `--quiet`: Suppress informational messages.

-   `--debug`: Enable debug mode, which includes additional logging.

-   `--defer`: Defer execution of the generated JavaScript code. The JavaScript file will be created, but it won't be executed.

### Example

Here's an example of how to use the Valhalla Script Parser:

```bash
npm mjolnir --file=index.vh --output=./build
```

In this example, `index.vh` will be parsed, and the resulting JavaScript code will be saved in the `./build` directory. If the `--defer` option is not used, the JavaScript code will also be executed.

### Hello World

Here is a `Hello World` implementation.

```vh
carve rune navn -) `Fynn`;
myrkur<»Hej « + navn>; // logs `Hej Fynn`
```

## Valhalla Script Language

Valhalla script is a unique esoteric programming language. It includes the following key features:

-   `<` and `>`: Represent opening and closing parentheses.
-   `--) `: Translates to `=>` in JavaScript.
-   `-) `: Translates to `=` in JavaScript.
-   `carve rune `: Translates to `let ` in JavaScript.
-   `carve saga `: Translates to `const ` in JavaScript.
-   `myrkur`: Translates to `console.log` in JavaScript.
-   `«` and `»`: Represent a string as a JavaScript backtick.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

Valhalla Script Parser uses the following open-source libraries:

-   [chalk](https://www.npmjs.com/package/chalk)
