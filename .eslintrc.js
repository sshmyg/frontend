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
    es2020: true,
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
    'no-unused-vars': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-nested-ternary': 'error',

    // Promises
    'no-return-await': 'error',
    'no-await-in-loop': 'warn',
    'prefer-promise-reject-errors': 'error',
    'require-atomic-updates': 'error',
    'no-async-promise-executor': 'error',
    'no-promise-executor-return': 'error',

    'react/prop-types': 'off',
    'react/destructuring-assignment': 'off',
    'react/prefer-stateless-function': 'warn',
    'react/jsx-no-bind': 'error',
    'react/jsx-fragments': ['error', 'element'],
    'react/forbid-prop-types': 'off',
    'react/display-name': 'warn',
    'react/no-multi-comp': ['error', { ignoreStateless: true }],
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'never', children: 'never' },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-sort-props': [
      'warn',
      {
        ignoreCase: true,
        shorthandFirst: true,
        callbacksLast: true,
        noSortAlphabetically: true,
        reservedFirst: false,
        multiline: 'last',
      },
    ],

    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/array-type': [
      'error',
      { default: 'array', readonly: 'array' },
    ],
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',

    'import/no-cycle': 'error',
    'import/no-unresolved': 'error',
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

    'jest/valid-title': 'off', // allow dynamic test titles

    'prettier/prettier': 'error',
    'prefer-object-spread': 'error',

    'i18next/no-literal-string': [
      'error',
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
