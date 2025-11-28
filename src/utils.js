// Utility functions for testing
export const add = (a, b) => a + b

export const multiply = (a, b) => a * b

export const greetUser = (name) => `Hello, ${name}!`

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}