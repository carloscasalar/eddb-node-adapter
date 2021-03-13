// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defaults } = require('jest-config');
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transformIgnorePatterns: [...defaults.transformIgnorePatterns, '<rootDir>/dist/'],
};
