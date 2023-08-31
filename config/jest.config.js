const { compilerOptions } = require('../tsconfig.json');
const { pathsToModuleNameMapper } = require('ts-jest');

module.exports = {
  preset: 'ts-jest',
  rootDir: '../',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/config/setup-tests.js'],
  testMatch: ['<rootDir>/**/*.(steps|test).ts?(x)'],
  moduleDirectories: ['node_modules', '<rootDir>'],
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
    ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: 'src/' }),
  },
  collectCoverage: true,
  coverageReporters: ['lcov', 'text-summary'],
  coverageDirectory: '<rootDir>/coverage',
  resolver: `<rootDir>/config/jest.resolver.js`,
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/*.stories.{ts,tsx}',
    '!index.tsx',
  ],
};
