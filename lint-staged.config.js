module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'eslint --fix',
    'pretty-quick --staged',
    'jest --bail --findRelatedTests --coverage false',
  ],
  '*.module.css': ['stylelint'],
  '**/*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit',
};
