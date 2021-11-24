module.exports = {
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "js"],
  testResultsProcessor: "jest-sonar-reporter",
  collectCoverage: true,
  coverageReporters: ["json", "lcov", "text", "clover"],
  modulePathIgnorePatterns: ["mocks"]
}