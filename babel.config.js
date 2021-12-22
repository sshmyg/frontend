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

    '@babel/preset-typescript',
    '@babel/preset-react',
  ],

  plugins: [
    '@babel/plugin-transform-async-to-generator',
    '@babel/plugin-transform-runtime',
  ],

  env: {
    development: {
      plugins: ['@babel/plugin-transform-react-jsx-source'],
    },

    production: {
      plugins: [
        'babel-plugin-transform-react-remove-prop-types',
        '@babel/plugin-transform-react-constant-elements',
        '@babel/plugin-transform-react-inline-elements',
      ],
    },

    test: {
      plugins: ['@babel/plugin-transform-modules-commonjs'],
    },
  },
};
