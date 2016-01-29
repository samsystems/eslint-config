module.exports = {
    'extends': 'yandex',
    'env': {
        'jasmine': true,
        'node': true,
        'mocha': true,
        'browser': true,
        'builtin': true,
        'jquery': true,
        'prototypejs': true,
        'es6': true
    },
    'rules': {
        'max-len': [2, 100, 4, { 'ignoreComments': true, 'ignoreUrls': true, 'ignorePattern': '\/.*\/' }],
        'block-scoped-var': 2,
        'camelcase': 2,
        'curly': [
            2,
            'all'
        ],
        'dot-notation': [
            2,
            {
                'allowKeywords': true
            }
        ],
        'eqeqeq': [
            2,
            'allow-null'
        ],
        'strict': [
            2,
            'function'
        ],
        'new-cap': 2,
        'guard-for-in': 2,
        'no-bitwise': 2,
        'no-caller': 2,
        'no-cond-assign': [
            2,
            'except-parens'
        ],
        'no-debugger': 2,
        'space-before-function-paren': 0,
        'no-empty': 2,
        'no-eval': 2,
        'no-extend-native': 2,
        'no-irregular-whitespace': 2,
        'no-iterator': 2,
        'no-loop-func': 2,
        'no-multi-str': 2,
        'no-new': 2,
        'no-proto': 2,
        'no-script-url': 2,
        'no-sequences': 2,
        'no-undef': 2,
        'no-shadow': 0,
        'no-unused-vars': 2,
        'no-with': 2,
        'no-var': 1,
        'vars-on-top': 1,
        'no-inner-declarations': 1,
        'prefer-const': 2,
        'object-curly-spacing': [2, 'always'],
        'quotes': [
            2,
            'single'
        ],
        'semi': [
            2,
            'always'
        ],
        'valid-typeof': 2,
        'wrap-iife': [
            2,
            'inside'
        ]
    },
    'globals': {
        'angular': true,
        'define': false,
        'require': true,
        'exports': false,
        'module': false,
        'describe': false,
        'before': false,
        'beforeEach': false,
        'after': false,
        'afterEach': false,
        'it': false,
        'inject': false,
        'expect': false,
        'spyOn': false
    },
    'ecmaFeatures': {
        'blockBindings': true
    }
};

