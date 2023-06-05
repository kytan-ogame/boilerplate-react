module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  // setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  testMatch: ['<rootDir>/src/**/*.(spec|test).ts?(x)'],
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  collectCoverage: true,
  coverageReporters: ['lcov', 'text-summary'],
  coverageDirectory: 'coverage',
  resolver: `<rootDir>/jest-resolver.js`,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!<rootDir>/src/**/*.stories.{ts,tsx}',
    '!<rootDir>/src/index.tsx',
  ],
};
