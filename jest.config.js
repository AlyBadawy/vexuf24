/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/naming-convention */

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testMatch: ['**/*.test.(tsx|jsx)'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/app/javascript/src/$1',
  },
  setupFilesAfterEnv: ['./app/javascript/src/__tests__/jest.setup.ts'],
};
