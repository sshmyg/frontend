module.exports = {
  clearMocks: true,
  verbose: false,
  coverageDirectory: 'coverage',
  notify: true,
  notifyMode: 'always',

  setupFilesAfterEnv: ['./jest.setup.js'],
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],

  moduleNameMapper: {
    '^app/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sss|styl)$': '<rootDir>/__mocks__/style.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/file.js',
  },
};
