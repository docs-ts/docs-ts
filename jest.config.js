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
      branches: 91,
      functions: 99,
      lines: 99,
      statements: 99
    }
  },
  coveragePathIgnorePatterns: ['/node_modules/', '/src/bin.ts'],
  testPathIgnorePatterns: ['/node_modules/', 'test/utils.ts', 'test/fixtures/*']
}
