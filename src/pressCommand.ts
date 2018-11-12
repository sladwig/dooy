import { KEYS } from './specialKeys';

const t = (key: string): string => `t:${key}`;
const kp = (key: string): string => `kp:${key}`;

const createCommandsWithModifier = (...args: string[]): string => {
    const modifier = args[0];
    const keys = args[1];
    return `kd:${modifier} ${createKeyPressCommands(keys)} ku:${modifier}`;
};

const createKeyPressCommands = (...args: string[]): string => {
    const keys = args[0];
    return keys
        .split(',')
        .map(key => (KEYS.has(key) ? kp(key) : t(key)))
        .join(' ');
};

export const pressCommand = (...args: string[]): string => {
    if (args.length === 1) args = args[0].split('+');
    const commandString = args.length > 1 ? createCommandsWithModifier : createKeyPressCommands;
    return commandString(...args);
};
