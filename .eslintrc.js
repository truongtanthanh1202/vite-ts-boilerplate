module.exports = {
  root: true,
  env: {
    node: true,
    'vue/setup-compiler-macros': true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
  ],
  parserOptions: {
    ecmaVersion: 2021,
  },
  rules: {
    'lodash/prefer-lodash-method': 'off',
    'lodash/import-scope': 'off',
    'lodash/prefer-noop': 'off',

    'arrow-parens': 'off',
    'import/order': 'off',
    'comma-dangle': 'off',
    'no-console': 'off',
    'no-debugger': 'warn',
    'no-var': 'error',
    'no-unused-vars': 'off',
    'block-scoped-var': 'error',
    'no-param-reassign': 'error',
    semi: ['warn', 'always'],
    'space-before-function-paren': ['off', 'never'],
    'key-spacing': [
      'warn',
      {
        mode: 'minimum',
        beforeColon: false,
        afterColon: true,
      },
    ],
    'arrow-spacing': ['warn'],
    'spaced-comment': ['warn', 'always', { markers: ['/'] }],
    'space-in-parens': ['warn', 'never'],
    'object-curly-spacing': ['warn', 'always'],
    'no-trailing-spaces': 'warn',
    'object-shorthand': ['warn', 'methods'],
    'prefer-template': 'warn',
    'no-useless-concat': 'warn',
    'prefer-const': 'error',
    yoda: ['warn', 'never', { exceptRange: true }],
    // "indent": ["warn", 2, { "SwitchCase": 1 }],
    quotes: ['warn', 'single', { avoidEscape: true }],
    'max-len': [
      'warn',
      110,
      {
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignorePattern: 'd="([\\s\\S]*?)"',
      },
    ],
    'no-constant-condition': [
      'warn',
      {
        checkLoops: false,
      },
    ],
    'brace-style': ['warn'],
    eqeqeq: ['warn', 'always'],
    camelcase: 'off',

    // typescript-eslint
    '@typescript-eslint/no-unused-vars': ['warn', { vars: 'all', args: 'none' }],
    '@typescript-eslint/no-explicit-any': 'off',

    // vue
    'vue/attribute-hyphenation': 'off',
    'vue/html-self-closing': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/html-indent': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/multi-word-component-names': 'off',
  },
};
