module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.mjs'] }
    }
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'standard',
    'plugin:vue/recommended',
    'plugin:prettier/recommended'
  ],
  // required to lint *.vue files
  plugins: [
    'vue',
    'prettier',
  ],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state'],
      },
    ],
    // Enforce import order
    'import/order': 2,

    // Imports should come first
    'import/first': 2,

    // Other import rules
    'import/no-mutable-exports': 2,

    // Allow unresolved imports
    'import/no-unresolved': 0,

    // Allow paren-less arrow functions only when there's no braces
    'arrow-parens': [2, 'as-needed', { requireForBlockBody: true }],

    // Allow async-await
    'generator-star-spacing': 0,

    // Prefer const over let
    'prefer-const': [2, {
      'destructuring': 'any',
      'ignoreReadBeforeAssign': false
    }],

    // No single if in an "else" block
    'no-lonely-if': 2,

    // Force curly braces for control flow
    curly: 2,

    // No async function without await
    'require-await': 2,

    // Force dot notation when possible
    'dot-notation': 2,

    'no-var': 2,

    'space-before-function-paren': [2, {
      anonymous: 'always',
      named: 'never'
    }],
    'vue/no-parsing-error': [2, {
      'x-invalid-end-tag': false
    }],
    'vue/max-attributes-per-line': [2, {
      'singleline': 5
    }]
//    'vue/component-name-in-template-casing': [
//      'off',
//    ],
//    'vue/no-v-html': [
//      'off',
//    ],
  },
};
