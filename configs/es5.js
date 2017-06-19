"use strict";

module.exports = {
    "extends": [
        "../rules/errors",
        "../rules/best-practices",
        "../rules/strict",
        "../rules/variables",
        "../rules/style"
    ].map(require.resolve),
    parserOptions: {
        ecmaVersion: 5,
        sourceType: "script",
        ecmaFeatures: {}
    },
    globals: {}
};
