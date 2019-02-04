module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  settings: {
    'import/resolver': 'webpack',
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
  },
  extends: [
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
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
//    'vue/component-name-in-template-casing': [
//      'off',
//    ],
//    'vue/no-v-html': [
//      'off',
//    ],
  },
};
