import type {Config} from 'jest'
import {defaults} from 'jest-config'

export default async (): Promise<Config> => {
  return {
    verbose: true,
    preset: 'ts-jest',
    testEnvironment: 'node',
    transformIgnorePatterns: [...defaults.transformIgnorePatterns, '<rootDir>/dist/'],
    testPathIgnorePatterns: [...defaults.testPathIgnorePatterns, '<rootDir>/dist/'],
  }
}
