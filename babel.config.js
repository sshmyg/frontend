module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        modules: false,
        corejs: 3,
      },
    ],

    // '@babel/preset-typescript',
    '@babel/preset-react',
  ],

  plugins: [
    'babel-plugin-transform-react-class-to-function',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-async-to-generator',
  ],

  env: {
    development: {
      plugins: [
        'react-hot-loader/babel',
        '@babel/plugin-transform-react-jsx-source',
      ],
    },

    production: {
      plugins: [
        'babel-plugin-transform-react-remove-prop-types',
        '@babel/plugin-transform-react-constant-elements',
        '@babel/plugin-transform-react-inline-elements',
        [
          'react-intl',
          {
            messagesDir: './build/messages/',
          },
        ],
      ],
    },

    test: {
      plugins: ['@babel/plugin-transform-modules-commonjs'],
    },
  },
};
