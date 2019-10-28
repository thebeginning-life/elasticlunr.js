const fs = require("fs");
const path = require("path");
const execSync = require('child_process').execSync;
for (var i of fs.readdirSync(__dirname)) {
    let currentPath = fs.statSync(path.join(__dirname, i));
    if (!currentPath.isDirectory()) continue;
    let setupPath = path.join(__dirname, i, 'src');
    execSync(`cd ${setupPath} && npm install && npm link ../../..`);
}