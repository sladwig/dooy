import { pressCommand } from './pressCommand';
import { KEYS } from './specialKeys';

test('creates simple keypress', () => {
    expect(pressCommand('abc')).toBe('t:abc');
});

KEYS.forEach((key: string) => {
    test(`creates keypress command for '${key}'`, () => {
        expect(pressCommand(key)).toBe(`kp:${key}`);
    });
});

test('accepts comma seperated keys', () => {
    expect(pressCommand('arrow-up,arrow-down,abc')).toBe('kp:arrow-up kp:arrow-down t:abc');
});

test('accepts modifier keys', () => {
    expect(pressCommand('cmd', 'c')).toBe('kd:cmd t:c ku:cmd');
});

test('accepts modifier keys in one string seperated by "+"', () => {
    expect(pressCommand('cmd+c')).toBe('kd:cmd t:c ku:cmd');
});

test('accepts modifier keys in one string seperated by "+" and ignores everything after the second "+"', () => {
    expect(pressCommand('cmd+c+d')).toBe('kd:cmd t:c ku:cmd');
});
