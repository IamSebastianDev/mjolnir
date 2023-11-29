/** @format */

export const performance = () => {
    const start = Date.now();
    const stop = () => {
        const now = Date.now();
        return now - start;
    };

    const inSec = (value: number) => {
        return Math.trunc(value / 1000);
    };

    return {
        stop,
        inSec,
    };
};
