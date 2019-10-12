import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import Pages from './Pages'

test('Clicking the menu brings to another page', () => {
  const history = createMemoryHistory()
  const { getByText } = render(
    <Router history={history}>
      <Pages />
    </Router>
  )
  fireEvent.click(getByText(/contact/i))
  expect(getByText(/select a contact/i)).toBeInTheDocument()
})

test('Landing on a bad page shows 404 page', () => {
  const history = createMemoryHistory()
  history.push('/some/bad/route')
  const { getByText } = render(
    <Router history={history}>
      <Pages />
    </Router>
  )
  expect(getByText(/404 not found/i)).toBeInTheDocument()
})

test('rendering a component that uses withRouter', () => {
  const history = createMemoryHistory()
  const route = '/some-route'
  history.push(route)
  const { getByTestId } = render(
    <Router history={history}>
      <Pages />
    </Router>
  )
  expect(getByTestId('location-display').textContent).toBe(route)
})
