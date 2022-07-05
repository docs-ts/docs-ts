module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: 'test',
  moduleFileExtensions: ['ts', 'js'],
  coverageThreshold: {
    global: {
      statements: 94,
      branches: 76,
      functions: 97,
      lines: 95
    }
  },
  coveragePathIgnorePatterns: ['/node_modules/', '/src/bin.ts'],
  testPathIgnorePatterns: ['/node_modules/', 'test/utils.ts', 'test/fixtures/*']
}
