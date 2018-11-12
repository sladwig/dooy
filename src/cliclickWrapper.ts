import * as util from 'util';
import { exec } from 'child_process';
const execAsPromise = util.promisify(exec);

export const cliclickWrapper = (
    cmd: (...args: string[]) => string
): ((...args: string[]) => Promise<{ stdout: string; stderr: string }>) => {
    return (...args: string[]): Promise<{ stdout: string; stderr: string }> => {
        return execAsPromise(`cliclick ${cmd(...args)}`);
    };
};
