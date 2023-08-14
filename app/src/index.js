const fs = require('fs');
const YAML = require('yaml');

const file = fs.readFileSync('./config.yml', 'utf8')
const config = YAML.parse(file)
const username = require("os").userInfo().username;

console.log(`Delay: ${config.delay}`);
console.log('The program is running in the background...');
console.log('Output in the data.log file');
setInterval(() => {
    const dateTimeObject = new Date();

    fs.writeFileSync(
        './output/date.log',
        `[${dateTimeObject.toTimeString()}] Hi User ${username}!\n`,
        { flag: "a" }
    );
}, config.delay * 1000);