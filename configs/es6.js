"use strict";

module.exports = {
    "extends": [
        "../rules/errors",
        "../rules/best-practices",
        "../rules/strict",
        "../rules/variables",
        "../rules/style",
        "../rules/es6"
    ].map(require.resolve),
    parser: "babel-eslint",
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "script"
    },
    env: {
        es6: true
    },
    globals: {}
};
