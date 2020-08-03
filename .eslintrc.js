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
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['eslint:recommended', 'prettier', 'prettier/react', 'plugin:react/recommended'],
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
  },
  plugins: ['react', 'prettier'],
  globals: {
    React: 'writable',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
