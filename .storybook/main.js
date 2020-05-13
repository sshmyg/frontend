const custom = require('../webpack.config.js');

module.exports = {
  stories: ['../src/**/*.stories.tsx'],

  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
    });

    config.resolve.extensions.push('.ts', '.tsx');

    return {
      ...config,
      module: { ...config.module, rules: custom.module.rules },
    };
  },
};
