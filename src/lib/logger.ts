/** @format */
import chalk from 'chalk';

export const log = (quiet: boolean, debugEnabled: boolean) => {
    const info = (message: string, ...data: any[]) => {
        if (quiet) return;
        console.log(chalk.green(`[Mjølnir:info]:: `, message));
        if (data && data.length > 0) {
            console.log(...data);
        }
    };

    const debug = (...message: any[]) => {
        if (!debugEnabled || quiet) return;
        console.log(chalk.yellow(`[Mjølnir:debug]:: `, ...message));
    };

    const error = (...message: any[]) => {
        console.log(chalk.white.bgRed(`[Mjølnir:debug]:: `, ...message));
        if (debugEnabled) {
            throw new Error(`[Mjølnir:error]:: ${message}`, { cause: 'Compiler' });
        }
        process.exit(1);
    };

    return {
        info,
        debug,
        error,
    };
};
