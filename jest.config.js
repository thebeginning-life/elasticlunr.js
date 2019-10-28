module.exports = {
    "projects": [
        {
            "displayName": "gatsby",
            "preset": "jest-puppeteer",
            "testMatch": ["<rootDir>/integration/gatsby/tests/*.test.js"],
            "transform": {
                "^.+\\.[t|j]sx?$": "babel-jest"
            },
            "globalSetup": "<rootDir>/integration/gatsby/setup.js",
            "server": {
                "command": "cd integrations/gatsby/src && npm run develop",
                "port": 8000
            }
        }
    ]
}