"use strict";

module.exports = {
    "extends": [
        "./es6"
    ].map(require.resolve),
    env: {
        mocha: true
    },
    globals: {}
};
