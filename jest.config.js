/// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/// Copyright (c) 2021 Guless developers and other contributors.
/// https://developers.guless.com/LICENSE.txt
/// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
module.exports = {
    // Indicates whether the coverage information should be collected while executing the test
    collectCoverage: true,

    // An array of glob patterns indicating a set of files for which coverage information should be collected
    collectCoverageFrom: [
        "<rootDir>/src/**/*.+(ts|tsx)"
    ],

    // A set of global variables that need to be available in all test environments
    globals: {
        "ts-jest": { tsconfig: "./test/tsconfig.json" },
    },

    // A map from regular expressions to module names that allow to stub out resources with a single module
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1"
    },

    // A preset that is used as a base for Jest's configuration
    preset: "ts-jest",
};
