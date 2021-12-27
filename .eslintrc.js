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
    'i18next',
  ],
  extends: [
    'eslint:recommended',

    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',

    'plugin:promise/recommended',

    'plugin:jest/recommended',

    'plugin:react/recommended',

    'plugin:import/recommended',
    'plugin:import/typescript',

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
    'prefer-object-spread': 'error',

    'react/prop-types': 'off',
    'react/destructuring-assignment': 'off',
    'react/prefer-stateless-function': 'warn',
    'react/jsx-no-bind': 'error',
    'react/forbid-prop-types': 'warn',
    'react/display-name': 'warn',

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/array-type': [
      'error',
      { default: 'array', readonly: 'array' },
    ],
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    'import/no-cycle': 'error',
    'import/no-unresolved': 'error',
    'import/export': 'warn',
    'import/order': [
      'warn',
      {
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal',
          },
        ],
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

    'i18next/no-literal-string': [
      'warn',
      {
        markupOnly: true,
        // do not check attributes. Otherwise it would report all props such as "size", "color", etc..
        onlyAttribute: ['foo'],
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },

    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },

  overrides: [
    {
      files: ['src/**/*.+(stories|test).tsx'],
      rules: {
        'i18next/no-literal-string': 'off',
      },
    },
  ],
};
