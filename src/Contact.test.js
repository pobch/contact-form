import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render, fireEvent, wait } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import Contact from './Contact'

test('Submit button start as disabled', () => {
  const history = createMemoryHistory()
  const { getByText } = render(
    <Router history={history}>
      <Contact />
    </Router>
  )
  expect(getByText(/submit/i)).toBeDisabled()
})

test('Can fill out every input field and submit', async () => {
  const spy = jest.spyOn(window, 'alert').mockImplementation(() => {})

  const history = createMemoryHistory()
  const { getByLabelText, getByText } = render(
    <Router history={history}>
      <Contact />
    </Router>
  )
  fireEvent.change(getByLabelText(/select a contact/i), { target: { value: 'careers' } })
  fireEvent.change(getByLabelText(/subject/i), { target: { value: 'test subject' } })
  fireEvent.change(getByLabelText(/name/i), { target: { value: 'test name' } })
  fireEvent.change(getByLabelText(/mail/i), { target: { value: 'test@test.com' } })
  fireEvent.change(getByLabelText(/phone/i), { target: { value: '0888' } })
  fireEvent.change(getByLabelText(/question/i), { target: { value: 'test\nmultiple\nlines' } })
  expect(getByText(/submit/i)).toBeEnabled()
  fireEvent.click(getByText(/submit/i))
  await wait(
    () =>
      expect(window.alert).toHaveBeenCalledWith(
        'contactCategory = careers\n' +
          'subject = test subject\n' +
          'fullName = test name\n' +
          'email = test@test.com\n' +
          'phone = 0888\n' +
          'question = test\n' +
          'multiple\n' +
          'lines\n'
      ),
    { timeout: 1000 }
  )
  spy.mockRestore()
})
