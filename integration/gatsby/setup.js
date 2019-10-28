const { setup: setupDevServer } = require('jest-dev-server');
const { setup: setupPuppeteer} = require('jest-environment-puppeteer');
module.exports = async function globalSetup() {
    await setupPuppeteer();
    await setupDevServer({
        port: 9000,
        command: 'cd integration/gatsby/src && npm run build && npm run serve',
        debug: true,
        launchTimeout: 50000
    })
}