import { render, screen } from '@testing-library/react'
import { expect, test, describe } from 'vitest'
import App from './App'

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />)
    // Test passes if no error is thrown during rendering
  })

  test('renders empty fragment', () => {
    const { container } = render(<App />)
    // Since App returns an empty fragment, container should be empty
    expect(container.firstChild).toBe(null)
  })
})