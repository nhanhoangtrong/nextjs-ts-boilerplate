module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
  },
  globals: {
    expect: true,
    sinon: true,
    __DEV__: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  rules: {
    semi: ['error', 'always'],
    'no-unused-vars': [
      1,
      {
        vars: 'local',
        args: 'after-used',
      },
    ],
    'no-console': [1],
    'react/react-in-jsx-scope': 'off',
  },
  plugins: ['react'],
  globals: {
    React: 'writable',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
