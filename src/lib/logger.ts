/** @format */
import chalk from 'chalk';

export const log = (quiet: boolean, enableDebug: boolean) => {
    const info = (...message: any[]) => {
        if (quiet) return;
        console.log(chalk.green(`[Mjølnir:info]:: `, ...message));
    };

    const debug = (...message: any[]) => {
        if (!enableDebug || quiet) return;
        console.log(chalk.yellow(`[Mjølnir:debug]:: `, ...message));
    };

    const error = (...message: any[]) => {
        throw new Error(`[Mjølnir:error]:: ${message}`, { cause: 'Compiler' });
    };

    return {
        info,
        debug,
        error,
    };
};
