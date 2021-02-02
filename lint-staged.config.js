module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'pretty-quick --staged'],
  '*.module.css': ['stylelint'],
  '**/*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit',
};
