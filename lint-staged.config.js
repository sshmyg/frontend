module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'pretty-quick --staged'],
  '**/*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit',
};
