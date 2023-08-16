const fs = require('fs');
const YAML = require('yaml');
const chokidar = require('chokidar');

const configFilePath = './config.yml';

let intervalId = null;

function readConfig(configFile) {
    const file = fs.readFileSync(configFile, 'utf8');
    const config = YAML.parse(file);
    console.log(`Delay: ${config.delay}`);
    return config;
}

function startInterval(delay) {
    if (intervalId) {
        clearInterval(intervalId);
    }

    intervalId = setInterval(() => {
        const dateTimeObject = new Date();
        const username = require("os").userInfo().username;

        fs.writeFileSync(
            './output/date.log',
            `[${dateTimeObject.toTimeString()}] Hi User ${username}!\n`,
            { flag: "a" }
        );
    }, delay * 1000);
}

function watchConfigFile(configFile) {
    const watcher = chokidar.watch(configFile);

    watcher.on('change', (path) => {
        console.log('Config file changed. Reloading...');
        const newConfig = readConfig(configFilePath);
        startInterval(newConfig.delay);
    });
}

const initialConfig = readConfig(configFilePath);
startInterval(initialConfig.delay);
watchConfigFile(configFilePath);

console.log('The program is running in the background...');
console.log('Output in the data.log file');
