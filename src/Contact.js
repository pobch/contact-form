import React from 'react'
import { Formik } from 'formik'
import styled from 'styled-components'
import DefaultInputField from './InputField'
import DefaultSelectField from './SelectField'
import DefaultTextAreaField from './TextAreaField'
import { SubmitButton } from './SubmitButton'
import { COLORS, MEDIA } from './utils/styles'
import { contactUsValues, contactUsValidator, TOUCH_STATE } from './utils/forms'
import BALLOON from './images/Balloons.svg'

const ScFlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 50px;
  ${MEDIA.TABLET`
    margin-top: 40px;
  `}
  ${MEDIA.DESKTOP`
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    width: 720px;
  `}
`

const ScHeadIcon = styled.img`
  width: 81px;
  height: auto;
  align-self: center;
  margin-bottom: 10px;
  ${MEDIA.TABLET`width: 108px;`}
  ${MEDIA.DESKTOP`width: 108px`}
`

const ScHeader = styled.h1`
  align-self: center;
  margin-bottom: 30px;
  ${MEDIA.TABLET`
    margin-bottom: 50px;
  `}
  ${MEDIA.DESKTOP`
    margin-bottom: 50px;
  `}
`

const ScLabel = styled.div.attrs({
  className: 'font-body'
})`
  margin-bottom: 10px;
`

const InputField = styled(DefaultInputField)`
  margin-bottom: 30px;
`

const SelectField = styled(DefaultSelectField)`
  margin-bottom: 30px;
`

const TextAreaField = styled(DefaultTextAreaField)`
  margin-bottom: 30px;
`

const ScOptionalText = styled.span`
  color: ${COLORS.GREY};
`

function Contact() {
  return (
    <ScFlexWrapper>
      <ScHeadIcon src={BALLOON} alt="" />
      <ScHeader>Contact Us</ScHeader>
      <Formik
        initialValues={contactUsValues}
        validate={contactUsValidator}
        onSubmit={(values, actions) => {
          let result = ''
          for (let key in values) {
            result = result + `${key} = ${values[key]}\n`
          }
          alert(result)
        }}
        render={({ handleSubmit, handleChange, handleBlur, values, errors, isValid, touched }) => {
          return (
            <form onSubmit={handleSubmit}>
              <ScLabel>Select a Contact</ScLabel>
              <SelectField
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.contactCategory}
                name="contactCategory"
                errMsg={errors.contactCategory}
                touchState={
                  touched.contactCategory
                    ? errors.contactCategory
                      ? TOUCH_STATE.TOUCHED_ERR
                      : TOUCH_STATE.TOUCHED_NO_ERR
                    : TOUCH_STATE.UNTOUCH
                }
              />
              <ScLabel>Subject</ScLabel>
              <InputField
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.subject}
                name="subject"
                placeholder="How can we help?"
                errMsg={errors.subject}
                touchState={
                  touched.subject
                    ? errors.subject
                      ? TOUCH_STATE.TOUCHED_ERR
                      : TOUCH_STATE.TOUCHED_NO_ERR
                    : TOUCH_STATE.UNTOUCH
                }
              />
              <ScLabel>
                Name <ScOptionalText>(optional)</ScOptionalText>
              </ScLabel>
              <InputField
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.fullName}
                name="fullName"
                placeholder="Your Name"
                errMsg={errors.fullName}
                touchState={
                  touched.fullName
                    ? errors.fullName
                      ? TOUCH_STATE.TOUCHED_ERR
                      : TOUCH_STATE.TOUCHED_NO_ERR
                    : TOUCH_STATE.UNTOUCH
                }
              />
              <ScLabel>E-mail</ScLabel>
              <InputField
                type="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                name="email"
                placeholder="name@domain.com"
                errMsg={errors.email}
                touchState={
                  touched.email
                    ? errors.email
                      ? TOUCH_STATE.TOUCHED_ERR
                      : TOUCH_STATE.TOUCHED_NO_ERR
                    : TOUCH_STATE.UNTOUCH
                }
              />
              <ScLabel>
                Phone <ScOptionalText>(optional)</ScOptionalText>
              </ScLabel>
              <InputField
                type="tel"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
                name="phone"
                placeholder="i.e. xxx xxx xxxx"
                errMsg={errors.phone}
                touchState={
                  touched.phone
                    ? errors.phone
                      ? TOUCH_STATE.TOUCHED_ERR
                      : TOUCH_STATE.TOUCHED_NO_ERR
                    : TOUCH_STATE.UNTOUCH
                }
              />
              <ScLabel>Comments/Questions</ScLabel>
              <TextAreaField
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.question}
                name="question"
                placeholder="Add your comments here"
                errMsg={errors.question}
                touchState={
                  touched.question
                    ? errors.question
                      ? TOUCH_STATE.TOUCHED_ERR
                      : TOUCH_STATE.TOUCHED_NO_ERR
                    : TOUCH_STATE.UNTOUCH
                }
              />
              <SubmitButton type="submit" disabled={!isValid}>
                SUBMIT
              </SubmitButton>
            </form>
          )
        }}
      />
    </ScFlexWrapper>
  )
}

export default Contact
