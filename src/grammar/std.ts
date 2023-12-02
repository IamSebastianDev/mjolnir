/** @format */

export const imports = {
    'node:fs/promises': ['writeFile', 'readFile', 'appendFile', 'rm'],
    'node:path': ['resolve', 'join'],
};

export const funcs = {
    // File handling
    eddaSeek: `async (handle) => await readFile(handle, 'utf-8')`,
    eddaEtch: `async (handle, content) => await writeFile(handle, content, 'utf-8')`,
    eddaWeave: `async (handle, content) => await appendFile(handle, content, 'utf-8')`,
    eddaExile: `async (handle, content) => await rm(handle, { recursive: true, force: true })`,
    root: `(...fragments) => resolve(join(process.cwd(), ...fragments))`,
};
