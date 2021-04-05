module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'jest',
    'promise',
    'react-hooks',
    'import',
    'react',
    'prettier',
  ],
  extends: [
    'eslint:recommended',

    'plugin:promise/recommended',

    'plugin:jest/recommended',

    'plugin:react/recommended',

    'plugin:import/errors',
    'plugin:import/warnings',

    'prettier',
  ],
  env: {
    es6: true,
    node: true,
    browser: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
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
    'no-unused-vars': 'warn',

    'react/prop-types': 'off',
    'react/destructuring-assignment': 'off',
    'react/prefer-stateless-function': 'warn',
    'react/jsx-no-bind': 'error',
    'react/forbid-prop-types': 'warn',
    'react/display-name': 'warn',

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
      },
    ],

    'prettier/prettier': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      'babel-module': {
        alias: {
          '@': './src',
        },
        cwd: 'babelrc',
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    },
  },
};
