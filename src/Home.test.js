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
