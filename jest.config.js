const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    "^@/components/(.*)$": "<rootDir>/components/$1",

    "^@/pages/(.*)$": "<rootDir>/pages/$1",
  },
  testEnvironment: "jest-environment-jsdom",
  collectCoverageFrom: [
    "src/**/*.ts",
    "src/**/*.tsx",
    "pages/**/*.ts",
    "pages/**/*.tsx",
    "!src/index.tsx",
    "!src/reportWebVitals.ts",
    "!src/setupTests.ts",
    "!src/react-app-env.d.ts",
    "!coverage/*/.ts",
    "!src/redux/interfaces/*.ts",
    "!src/**/*.test.ts",
    "!src/**/*.test.ts.snap",
    "!src/**/*.test.tsx.snap",
    "!src/**/*.test.tsx.snap",
  ],
};

module.exports = createJestConfig(customJestConfig);
