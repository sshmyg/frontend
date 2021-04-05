const custom = require('../webpack.config.js');

module.exports = {
  stories: ['../src/**/*.stories.@(tsx|mdx)'],
  webpackFinal: (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: custom.resolve.alias,
      },
      module: { ...config.module, rules: custom.module.rules },
    };
  },
  reactOptions: {
    fastRefresh: true,
  },
  core: {
    builder: 'webpack5',
  },
};
