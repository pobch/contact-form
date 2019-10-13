import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Home from './Home'

test('Menu in Home is rendered', () => {
  const { getByText } = render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  )
  expect(getByText(/contact/i)).toBeInTheDocument()
})

test('The logo is rendered', () => {
  const { getByAltText } = render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  )
  expect(getByAltText('logo')).toBeInTheDocument()
  expect(getByAltText('logo')).toHaveAttribute('src', expect.stringContaining('logo.svg'))
})
