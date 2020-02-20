module.exports = {
  skipCI: false,
  hooks: {
    'pre-commit': 'lint-staged',
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
    'post-checkout':
      'if [[ $GIT_PARAMS == *1 ]]; then yarn --ignore-scripts --pure-lockfile; fi',
    'post-merge': 'yarn --ignore-scripts --pure-lockfile',
  },
};
