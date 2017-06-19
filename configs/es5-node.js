"use strict";

module.exports = {
    "extends": [
        "./es5",
        "../rules/node"
    ].map(require.resolve),
    env: {
        node: true
    },
    globals: {}
};
