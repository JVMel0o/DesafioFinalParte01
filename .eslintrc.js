module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: ['standard'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    'no-unused-vars': ['error', { args: 'none' }]
  }
}
