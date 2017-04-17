module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    es6: true,
    node: true,
  },
  extends: 'airbnb-base',
  'rules': {
    'semi': ["error", "never"],
    'no-underscore-dangle': ["error", { "allowAfterThis": true }],
    'global-require': 0,
    'class-methods-use-this': 0,
    'import/no-unresolved': 0,
    'no-param-reassign': 0,
    'no-shadow': 0,
  }
}
