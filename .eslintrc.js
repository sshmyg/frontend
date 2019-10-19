module.exports = {
  root: true,
  plugins: ['jest', 'promise', 'react-hooks', 'import', 'react', 'prettier'],
  extends: [
    'eslint:recommended',

    'plugin:promise/recommended',

    'plugin:jest/recommended',

    'plugin:react/recommended',

    'plugin:import/errors',
    'plugin:import/warnings',

    'prettier',
    'prettier/react',
  ],
  env: {
    es6: true,
    node: true,
    browser: true,
    jest: true,
  },
  globals: {
    window: true,
    export: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    curly: ['error', 'all'],
    'no-param-reassign': ['error', { props: false }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-mixed-operators': 'off',

    'react/prop-types': 'off',
    'react/destructuring-assignment': 'off',
    'react/prefer-stateless-function': 'warn',

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    'prettier/prettier': 'error',
  },
  settings: {
    'import/resolver': {
      'babel-module': {
        alias: {
          app: './src',
        },
        cwd: 'babelrc',
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    },
  },
};
