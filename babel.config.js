module.exports = (api) => {
  api.cache.using(() => process.env.NODE_ENV);

  return {
    presets: [
      '@babel/preset-env',

      '@babel/preset-typescript',
      [
        '@babel/preset-react',
        { development: !api.env('production'), runtime: 'automatic' },
      ],
    ],

    plugins: [
      '@babel/plugin-transform-async-to-generator',
      '@babel/plugin-transform-runtime',
    ],

    env: {
      development: {
        plugins: ['react-refresh/babel'],
      },

      production: {
        plugins: [
          '@babel/plugin-transform-react-constant-elements',
          '@babel/plugin-transform-react-inline-elements',
        ],
      },

      test: {
        plugins: ['@babel/plugin-transform-modules-commonjs'],
      },
    },
  };
};
