"use strict";

module.exports = {
    "extends": [
        "./es5"
    ].map(require.resolve),
    env: {
        mocha: true
    },
    globals: {}
};
