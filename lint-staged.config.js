module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'eslint --fix',
    'prettier --ignore-unknown --write',
    'jest --bail --findRelatedTests --coverage false',
  ],
  '*.module.css': ['stylelint'],
  '**/*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit',
};
