module.exports = {
  clearMocks: true,
  verbose: false,
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: ['./jest.setup.js'],

  roots: ['<rootDir>/src'],

  coveragePathIgnorePatterns: ['<rootDir>/node_modules', '<rootDir>/test'],

  moduleNameMapper: {
    '^app/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sss|styl)$': '<rootDir>/__mocks__/style.js',
    '\\.(gif|ttf|eot|svg)$': '<rootDir>/__mocks__/file.js',
  },

  notify: true,
  notifyMode: 'always',
};
