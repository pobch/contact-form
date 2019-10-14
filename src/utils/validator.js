export const validator = values => {
  let errors = {}
  if (!values.contactCategory) {
    errors.contactCategory = 'Please select a contact from the list above.'
  }
  if (!values.subject) {
    errors.subject = 'Please include a subject.'
  }
  if (!values.email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Please enter a valid e-mail address.'
  }
  if (values.phone && !/^[0-9]+$/.test(values.phone)) {
    errors.phone = 'Please enter a valid phone number.'
  }
  if (!values.question) {
    errors.question = 'Please enter your comments or questions.'
  }
  return errors
}
