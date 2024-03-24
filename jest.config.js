/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/naming-convention */

module.exports = {
  collectCoverageFrom: [
    '<rootDir>/app/javascript/src/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/app/javascript/src/components/ui/*.{js,jsx,ts,tsx}',
    '!<rootDir>/app/javascript/src/__tests__/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/app/javascript/src/**/*.d.ts',
  ],
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
