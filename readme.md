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
carve rune navn † `Fynn`; // create the variable 'navn'
skæld∫inscribe<»Hej « + navn>; // logs `Hej Fynn`
```

## ValhallaScript Language

ValhallaScript is a unique esoteric programming language. It includes the following key features:

-   `<` and `>`: Represent opening and closing parentheses.
-   `(*)`: Translates to `=>` in JavaScript.
-   `†`: Translates to `=` in JavaScript.
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
-   `runestone`: Transpiles to `Object` in JavaScript.
    -   `runestone∫futhark`: Transpiles to `Object.fromEntries`
    -   `runestone∫glyphs`: Transpiles to `Object.entries`
    -   `runestone∫sigils`: Transpiles to `Object.keys`
    -   `runestone∫essence`: Transpiles to `Object.values`
-   `freyasOath`: Transpiles to `new Promise` in JavaScript
-   `scry` & `woven`: Transpiles to `async` & `await`
-   `destine`: Transpiles to `return`
-   `choose`, `path` & `rest`: Transpiles to `switch`, `case` and `break`

### File Api

A certain set of fns are provided to handle files.

#### `eddaEtch`

Type: `(handle: string, content: string) => Promise<void>``

Description:  
`eddaEtch` is an asynchronous function that creates a file at the specified location with the specified content. It accepts two parameters:

handle (type: `string`): The file path where you want to create the file.  
content (type: `string`): The content you want to write to the file.

Usage:

```vh
scry eddaEtch<»./file.txt«, »File Content«>
```

Returns:  
A promise that resolves when the file has been successfully created with the provided content. If any errors occur during the process, it will reject with an error message.

#### `eddaSeek`

Type: (handle: `string`) => Promise<string>

Description:  
`eddaSeek` is an asynchronous function that reads and retrieves the content of a file located at the specified path. It accepts one parameter:

handle (type: `string`): The file path from which you want to read the content.
Usage:

```vh
scry eddaSeek<»./file.txt«>
```

Returns:  
A promise that resolves with the content of the file as a string if the file exists and can be read. If the file does not exist or an error occurs during the process, it will reject with an error message.

#### `eddaWeave`

Type: `(handle: string, content: string) => Promise<void>``

Description:  
eddaWeave is an asynchronous function that appends the specified content to a file located at the specified path. It accepts two parameters:

handle (type: `string`): The file path to which you want to append the content.  
content (type: `string`): The content you want to append to the file.

Usage:

```vh
scry eddaWeave<»./file.txt«, »Additional Content«>
```

Returns:  
A promise that resolves when the content has been successfully appended to the file. If any errors occur during the process, it will reject with an error message.

#### `eddaExile`

Type: `(handle: string) => Promise<void>``

Description:  
eddaExile is an asynchronous function that deletes a file or directory located at the specified path. It accepts one parameter:

handle (type: `string`): The file or directory path you want to delete.
Usage:

```vh
scry eddaExile<»./file.txt«>
```

Returns:  
A promise that resolves when the file or directory has been successfully deleted. If any errors occur during the deletion process, it will reject with an error message.

### Path Api

Set of functions to interact with paths

#### `root`

Type: `(...fragments: string[]) => Promise<string>``

Description: function to create a absolute path from the root of the process.

Usage:

```vh
root<»./folder«, »file.txt«>
// results in ./path/to/process/folder/file.txt
```

## Contributing

If you would like to contribute, take a look at the [Contribution Guide](./contributing.md). Contributors of any skill level are
appreciated, if you have any questions, feel free to reach out.

## License

`Mjolnir` is licensed under the [MIT License](https://opensource.org/licenses/MIT)

## Acknowledgments

Valhalla Script Parser uses the following open-source libraries:

-   [chalk](https://www.npmjs.com/package/chalk)
