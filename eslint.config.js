const js = require('@eslint/js');
const globals = require('globals');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const importPlugin = require('eslint-plugin-import');
const prettierPlugin = require('eslint-plugin-prettier');
const i18nextPlugin = require('eslint-plugin-i18next');

module.exports = [
  { ignores: ['.git', 'node_modules/*', 'dist/*', 'public/*'] },

  {
    files: ['**/*.{js,cjs,mjs}'],
    ...js.configs.recommended,
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },

  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      import: importPlugin,
      prettier: prettierPlugin,
      i18next: i18nextPlugin,
    },
    settings: {
      react: { version: 'detect' },
      'import/resolver': { typescript: { alwaysTryTypes: true } },
    },
    rules: {
      curly: ['error', 'all'],
      'no-param-reassign': ['error', { props: false }],
      'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
      'no-mixed-operators': 'off',
      'no-unused-vars': 'off',
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'no-nested-ternary': 'error',

      // Promises / async
      'no-return-await': 'error',
      'no-await-in-loop': 'warn',
      'prefer-promise-reject-errors': 'error',
      'require-atomic-updates': 'error',
      'no-async-promise-executor': 'error',
      'no-promise-executor-return': 'error',

      // React
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

      // TypeScript
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/array-type': [
        'error',
        { default: 'array', readonly: 'array' },
      ],
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',

      // import/*
      'import/no-cycle': 'error',
      'import/no-unresolved': 'error',
      'import/order': [
        'warn',
        {
          pathGroups: [{ pattern: '@/**', group: 'internal' }],
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

      // Prettier
      'prettier/prettier': 'error',

      // Others
      'prefer-object-spread': 'error',

      // i18next
      'i18next/no-literal-string': [
        'error',
        {
          markupOnly: true,
          onlyAttribute: ['foo'],
        },
      ],
    },
  },

  {
    files: ['jest.setup.js'],
    languageOptions: {
      globals: { ...globals.jest },
    },
  },

  {
    files: ['src/**/*.test.tsx'],
    languageOptions: {
      globals: { ...globals.jest },
    },
    rules: {
      'i18next/no-literal-string': 'off',
    },
  },

  {
    files: ['src/**/*.stories.tsx'],
    rules: {
      'no-console': 'off',
      'i18next/no-literal-string': 'off',
    },
  },
];
