const util = require('util');
const exec = util.promisify(require('child_process').exec);

const cliclickWrapper = cmd => {
  return (...args) => {
    return exec(`cliclick ${cmd(...args)}`);
  };
};

module.exports = cliclickWrapper;
