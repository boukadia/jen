import { expect, test, describe } from 'vitest'
import { add, multiply, greetUser, validateEmail } from './utils'

describe('Utility Functions', () => {
  describe('Math Functions', () => {
    test('add function works correctly', () => {
      expect(add(2, 3)).toBe(5)
      expect(add(-1, 1)).toBe(0)
      expect(add(0, 0)).toBe(0)
    })

    test('multiply function works correctly', () => {
      expect(multiply(3, 4)).toBe(12)
      expect(multiply(-2, 5)).toBe(-10)
      expect(multiply(0, 100)).toBe(0)
    })
  })

  describe('String Functions', () => {
    test('greetUser returns correct greeting', () => {
      expect(greetUser('John')).toBe('Hello, John!')
      expect(greetUser('Alice')).toBe('Hello, Alice!')
    })
  })

  describe('Validation Functions', () => {
    test('validateEmail validates email correctly', () => {
      expect(validateEmail('test@example.com')).toBe(true)
      expect(validateEmail('user@domain.org')).toBe(true)
      expect(validateEmail('invalid-email')).toBe(false)
      expect(validateEmail('missing@.com')).toBe(false)
      expect(validateEmail('@domain.com')).toBe(false)
    })
  })
})