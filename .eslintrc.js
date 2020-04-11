module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "airbnb-base",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "_": true
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
    },
    "rules": {
        "no-new": 0,
        "no-param-reassign": ["error", { "props": false }],
        "no-underscore-dangle": ["error", { "allowAfterThis": true }],
    }
};