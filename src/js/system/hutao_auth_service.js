'use strict';

/**
 * useMultiFileAuthState personalizado
 * Referência do código principal
 * Otimização inclusa no código
 */

const { Mutex } = require('async-mutex');
const { mkdir, readFile, writeFile, unlink } = require('node:fs/promises');
const { join } = require('node:path');

const fileLocks = new Map();
const getFileLock = (path) => fileLocks.get(path) || fileLocks.set(path, new Mutex()).get(path);

const useMultiFileAuthState = async (folder) => {
    const { 
        BufferJSON, 
        initAuthCreds, 
        proto 
    } = await import('@whiskeysockets/baileys');

    const fixFileName = (file) => file?.replace(/\//g, '__')?.replace(/:/g, '-');

    const writeData = async (data, file) => {
        const filePath = join(folder, fixFileName(file));
        const mutex = getFileLock(filePath);
        const release = await mutex.acquire();
        try {
            await writeFile(filePath, JSON.stringify(data, BufferJSON.replacer));
        } finally {
            release();
        }
    };

    const readData = async (file) => {
        try {
            const filePath = join(folder, fixFileName(file));
            const mutex = getFileLock(filePath);
            const release = await mutex.acquire();
            try {
                const data = await readFile(filePath, { encoding: 'utf-8' });
                return JSON.parse(data, BufferJSON.reviver);
            } finally {
                release();
            }
        } catch {
            return null;
        }
    };

    const removeData = async (file) => {
        try {
            const filePath = join(folder, fixFileName(file));
            const mutex = getFileLock(filePath);
            const release = await mutex.acquire();
            try {
                await unlink(filePath);
            } catch {} finally {
                release();
            }
        } catch {}
    };

    await mkdir(folder, { recursive: true });

    const creds = (await readData('creds.json')) || initAuthCreds();

    return {
        state: {
            creds,
            keys: {
                get: async (type, ids) => {
                    const data = {};
                    await Promise.all(
                        ids.map(async (id) => {
                            let value = await readData(`${type}-${id}.json`);
                            if (type === 'app-state-sync-key' && value) {
                                value = proto.Message.AppStateSyncKeyData.fromObject(value);
                            }
                            data[id] = value;
                        })
                    );
                    return data;
                },
                set: async (data) => {
                    const tasks = [];
                    for (const category in data) {
                        for (const id in data[category]) {
                            const value = data[category][id];
                            const file = `${category}-${id}.json`;
                            tasks.push(value ? writeData(value, file) : removeData(file));
                        }
                    }
                    await Promise.all(tasks);
                }
            }
        },
        saveCreds: async () => writeData(creds, 'creds.json')
    };
};

module.exports = useMultiFileAuthState;
