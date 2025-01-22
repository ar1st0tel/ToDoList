export default {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['@testing-library/jest-dom'],
    transform: {
        '^.+\\.(ts|tsx)$': 'babel-jest',
        '^.+\\.(js|jsx)$': 'babel-jest',
    },
    moduleNameMapper: {
        '\\.module\\.scss$': '<rootDir>/__mocks__/styleMock.ts',
        '\\.scss$': '<rootDir>/__mocks__/styleMock.ts',
    },
    testMatch: [
        '**/src/**/*.{test,spec}.{ts,tsx}',
    ],
    testPathIgnorePatterns: [
        '/node_modules/',
        '\\.d\\.ts$',
        '\\.js$',
    ],
};