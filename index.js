"use strict";

module.exports = {
    "extends": [
        "./configs/es6"   // ES6 is the default config
    ].map(require.resolve)
};
