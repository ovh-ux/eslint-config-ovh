# eslint-config-ovh

Official OVH rules for ESLint.

:construction: **This configuration is under active discussions, so some of our projects  do not yet use this configuration**


## Getting Started

### Installation

Just install ESLint with the OVH config:
    `npm install --save-dev eslint eslint-config-ovh`

### Howto's

Creates an `.eslintrc.json` in your project, and specify the config that you want to use:

```json
{
    "extends": "ovh"
}
```

## Documentation

### Default configuration

* `ovh`: shortcut for `ovh/configs/es6` (see below)

### ES6 configuration

These configurations depends of `babel-eslint`.

* `ovh/configs/es6`: ES6
* `ovh/configs/es6-browser`: ES6 + browser
* `ovh/configs/es6-browser-test`: ES6 + test (browser)
* `ovh/configs/es6-node`: ES6 + node >= 6.x.x
* `ovh/configs/es6-node-test`: ES6 + test (node)

### ES5 configuration

* `ovh/configs/es5`: ES5
* `ovh/configs/es5-browser`: ES5 + browser
* `ovh/configs/es5-browser-test`: ES5 + test (browser)
* `ovh/configs/es5-node`: ES5 + node < 6.x.x
* `ovh/configs/es5-node-test`: ES5 + test (node)

## License

See `LICENSE` file.
