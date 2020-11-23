module.exports = {
  '*.{js,jsx}': [
    'eslint --fix',
    'pretty-quick --staged',
    'jest --bail --findRelatedTests',
  ],
};
