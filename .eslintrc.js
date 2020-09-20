module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.mjs'] },
    },
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: [
    'standard',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:vue/recommended',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
  ],
  // required to lint *.vue files
  plugins: ['unicorn', 'vue', '@typescript-eslint', 'prettier'],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'no-unused-vars': [2, { argsIgnorePattern: '^_' }],
    'no-unused-expressions': 'off',
    'vue/no-v-html': ['off'],
  },
}
