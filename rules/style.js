"use strict";

const INDENT_SIZE = 4;

module.exports = {
    rules: {
        // enforce consistent spacing inside array brackets
        "array-bracket-spacing": ["error", "never"],

        // enforce consistent spacing inside single-line blocks
        "block-spacing": ["error", "always"],

        // enforce consistent brace style for blocks
        "brace-style": ["error", "1tbs", { allowSingleLine: true }],

        // Don't enforce camelcase naming convention
        camelcase: "off",

        // enforce or disallow capitalization of the first letter of a comment
        "capitalized-comments": "off",

        // require trailing commas in multiline object literals
        "comma-dangle": ["error", {
            arrays: "never",
            objects: "never",
            imports: "never",
            exports: "never",
            functions: "never"
        }],

        // enforce consistent spacing before and after commas
        "comma-spacing": ["error", { before: false, after: true }],

        // enforce consistent comma style
        "comma-style": ["error", "last"],

        // enforce consistent spacing inside computed property brackets
        "computed-property-spacing": ["error", "never"],

        // enforces consistent naming when capturing the current execution context
        "consistent-this": ["error", "self"],

        // require or disallow newline at the end of files
        "eol-last": ["error", "always"],

        // require or disallow spacing between function identifiers and their invocations
        "func-call-spacing": ["error", "never"],

        // require function names to match the name of the variable or property to which they are assigned
        "func-name-matching": ["off", "always", {
            includeCommonJSModuleExports: false
        }],

        // require or disallow named function expressions
        "func-names": "off",

        // enforce the consistent use of either function declarations or expressions
        "func-style": "off",

        // disallow specified identifiers
        "id-blacklist": "off",

        // enforce minimum and maximum identifier lengths
        "id-length": "off",

        // require identifiers to match a specified regular expression
        "id-match": "off",

        // enforce consistent indentation
        indent: ["error", INDENT_SIZE, {
            VariableDeclarator: { "var": 1, let: 1, "const": 1 },
            outerIIFEBody: 1,
            MemberExpression: 1,
            FunctionDeclaration: {
                parameters: "first",
                body: 1
            },
            FunctionExpression: {
                parameters: "first",
                body: 1
            },
            CallExpression: {
                arguments: "first"
            },
            SwitchCase: 1
        }],

        // enforce the consistent use of either double or single quotes in JSX attributes
        "jsx-quotes": "off",

        // enforce consistent spacing between keys and values in object literal properties
        "key-spacing": ["error", {
            beforeColon: false,
            afterColon: true
        }],

        // enforce consistent spacing before and after keywords
        "keyword-spacing": ["error", {
            before: true,
            after: true
        }],

        // enforce position of line comments
        "line-comment-position": "off",

        // enforce consistent linebreak style
        "linebreak-style": "off",

        // require empty lines around comments
        "lines-around-comment": ["error", {
            beforeBlockComment: true,
            beforeLineComment: true,
            allowBlockStart: true,
            allowObjectStart: true,
            allowArrayStart: true
        }],

        // require or disallow newlines around directives
        "lines-around-directive": "off",

        // enforce a maximum depth that blocks can be nested
        "max-depth": "off",

        // enforce a maximum line length
        "max-len": ["error", 250],

        // enforce a maximum number of lines per file
        "max-lines": "off",

        // enforce a maximum depth that callbacks can be nested
        "max-nested-callbacks": "off",

        // enforce a maximum number of parameters in function definitions
        "max-params": "off",

        // enforce a maximum number of statements allowed per line
        "max-statements-per-line": "off",

        // enforce a maximum number of statements allowed in function blocks
        "max-statements": "off",

        // enforce newlines between operands of ternary expressions
        "multiline-ternary": "off",

        // require constructor names to begin with a capital letter
        "new-cap": ["error", {
            newIsCap: true,
            newIsCapExceptions: [],
            capIsNew: false,
            capIsNewExceptions: []
        }],

        // require parentheses when invoking a constructor with no arguments
        "new-parens": "error",

        // require or disallow an empty line after variable declarations
        "newline-after-var": "off",

        // require an empty line before return statements
        "newline-before-return": "off",

        // require a newline after each call in a method chain
        "newline-per-chained-call": ["error", { ignoreChainWithDepth: 4 }],

        // disallow Array constructors
        "no-array-constructor": "error",

        // disallow bitwise operators
        "no-bitwise": "off",

        // disallow continue statements
        "no-continue": "error",

        // disallow inline comments after code
        "no-inline-comments": "off",

        // disallow if statements as the only statement in else blocks
        "no-lonely-if": "error",

        // disallow mixed binary operators
        "no-mixed-operators": "error",

        // disallow mixed spaces and tabs for indentation
        "no-mixed-spaces-and-tabs": "error",

        // disallow multiple empty lines
        "no-multiple-empty-lines": ["error", { max: 2, maxBOF: 0, maxEOF: 1 }],

        // disallow negated conditions
        "no-negated-condition": "off",

        // disallow nested ternary expressions
        "no-nested-ternary": "off",

        // disallow Object constructors
        "no-new-object": "error",

        // disallow the unary operators ++ and --
        "no-plusplus": "off",

        // disallow specified syntax
        "no-restricted-syntax": ["error",
            "WithStatement"
        ],

        // disallow all tabs
        "no-tabs": "error",

        // disallow ternary operators
        "no-ternary": "off",

        // disallow trailing whitespace at the end of lines
        "no-trailing-spaces": "error",

        // allow dangling underscores in identifiers
        "no-underscore-dangle": ["off"],

        // disallow ternary operators when simpler alternatives exist
        "no-unneeded-ternary": ["error", { defaultAssignment: false }],

        // disallow whitespace before properties
        "no-whitespace-before-property": "error",

        // enforce consistent line breaks inside braces
        "object-curly-newline": "off",

        // enforce consistent spacing inside braces
        "object-curly-spacing": ["error", "always"],

        // enforce placing object properties on separate lines
        "object-property-newline": ["error", {
            allowMultiplePropertiesPerLine: true
        }],

        // require or disallow newlines around variable declarations
        "one-var-declaration-per-line": ["error", "always"],

        // enforce variables to be declared either together or separately in functions
        "one-var": ["error", "never"],

        // require or disallow assignment operator shorthand where possible
        "operator-assignment": "off",

        // enforce consistent linebreak style for operators
        "operator-linebreak": ["error", "after"],

        // require or disallow padding within blocks
        "padded-blocks": "off",

        // require quotes around object literal property names
        "quote-props": ["error", "as-needed", { keywords: true, unnecessary: true, numbers: false }],

        // enforce the consistent use of either backticks, double, or single quotes
        quotes: ["error", "double", { avoidEscape: true }],

        // require JSDoc comments
        "require-jsdoc": "off",

        // enforce consistent spacing before and after semicolons
        "semi-spacing": ["error", { before: false, after: true }],

        // require or disallow semicolons instead of ASI
        semi: ["error", "always"],

        // requires object keys to be sorted
        "sort-keys": "off",

        // require variables within the same declaration block to be sorted
        "sort-vars": "off",

        // enforce consistent spacing before blocks
        "space-before-blocks": "error",

        // enforce consistent spacing before function definition opening parenthesis
        "space-before-function-paren": ["error", {
            anonymous: "always",
            named: "always",
            asyncArrow: "always"
        }],

        // enforce consistent spacing inside parentheses
        "space-in-parens": ["error", "never"],

        // require spacing around infix operators
        "space-infix-ops": "error",

        // enforce consistent spacing before or after unary operators
        "space-unary-ops": ["error", {
            words: true,
            nonwords: false,
            overrides: {}
        }],

        // enforce consistent spacing after the // or /* in a comment
        "spaced-comment": ["error", "always", {
            line: {
                exceptions: ["-", "+"],
                markers: ["=", "!"]
            },
            block: {
                exceptions: ["-", "+", "*"],
                markers: ["=", "!"],
                balanced: false
            }
        }],

        // require or disallow Unicode byte order mark (BOM)
        "unicode-bom": ["error", "never"],

        // require parenthesis around regex literals
        "wrap-regex": "off"
    }
};
