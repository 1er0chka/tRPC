export default {
    preset: 'ts-jest',
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.tsx?$": 'ts-jest',
        // process `*.tsx` files with `ts-jest`
    },
    rootDir: 'packages/',
    moduleNameMapper: {
        "\\.(css|less|scss|sss|styl)$": "identity-obj-proxy"
    },
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageProvider: "v8",
    testResultsProcessor: "../node_modules/jest-html-reporter"

};
