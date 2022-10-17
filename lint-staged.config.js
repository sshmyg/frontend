module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'eslint --fix',
    'prettier --ignore-unknown --write',
    'jest --bail --findRelatedTests --passWithNoTests --coverage false',
  ],
  '*.module.css': ['stylelint'],
  '**/*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit',
};
