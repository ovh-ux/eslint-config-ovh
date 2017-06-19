"use strict";

module.exports = {
    "extends": [
        "./es6"
    ].map(require.resolve),
    env: {
        jasmine: true
    },
    globals: {}
};
