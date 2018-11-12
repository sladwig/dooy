const KEYS = require('./specialKeys');

const t = key => `t:${key}`;
const kp = key => `kp:${key}`;

const createCommandsWithModifier = (modifier, keys) => {
  return `kd:${modifier} ${createKeyPressCommands(keys)} ku:${modifier}`;
};

const createKeyPressCommands = keys => {
  return keys
    .split(',')
    .map(key => (KEYS.has(key) ? kp(key) : t(key)))
    .join(' ');
};

const pressCommand = (...args) => {
  if (args.length === 1) args = args[0].split('+');
  const commandString =
    args.length > 1 ? createCommandsWithModifier : createKeyPressCommands;
  return commandString(...args);
};

module.exports = pressCommand;
