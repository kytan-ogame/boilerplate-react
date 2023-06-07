// eslint-disable-next-line @typescript-eslint/no-var-requires
const jestConfig = require('./jest.config');

module.exports = {
  ...jestConfig,
  testMatch: ['<rootDir>/src/**/*.steps.{js,jsx,ts,tsx}'],
  coverageDirectory: 'bdd-coverage',
};
