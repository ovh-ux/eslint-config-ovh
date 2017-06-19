"use strict";

module.exports = {
    "extends": [
        "./es6"
    ].map(require.resolve),
    env: {
        browser: true,
        jquery: true
    },
    globals: {
        _: true,
        angular: true,
        moment: true
    }
};
