/* eslint-env node */
// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    exclude: [
      '**/node_modules/**/*',
    ],
    alias: {
        /* ... */
    },
    mount: {
        /* ... */
    },
    plugins: [
        /* ... */
    ],
    packageOptions: {
        external: []
    },
    testOptions: {
        files: [
            '**/tests.html'
        ]
    },
    devOptions: {
        /* ... */
    },
    buildOptions: {
        /* ... */
    },
};

