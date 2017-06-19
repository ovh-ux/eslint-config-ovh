"use strict";

module.exports = {
    "extends": [
        "./es6",
        "../rules/node"
    ].map(require.resolve),
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "script"
    },
    env: {
        node: true
    },
    globals: {}
};
