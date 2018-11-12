const cliclickWrapper = require('./src/cliclickWrapper');
const pressCommand = require('./src/pressCommand');

module.exports.press = cliclickWrapper(pressCommand);
