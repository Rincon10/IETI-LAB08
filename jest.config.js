module.exports = {
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
    moduleNameMapper: {
        '\\.(css)$': '<rootDir>/src/__mocks__/styleMock.js',
    },
};
