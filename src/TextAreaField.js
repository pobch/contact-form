import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { COLORS } from './utils/styles'
import { TOUCH_STATE } from './utils/forms'

const ScTextArea = styled.textarea.attrs({
  className: 'font-small-body'
})`
  display: block;
  padding: 1.25rem 1.25rem 0.5rem;
  height: 180px;
  border: 1px solid ${COLORS.GREY};
  width: 100%;
  margin-bottom: 5px;
  &::placeholder {
    color: ${COLORS.GREY};
  }
  &:focus {
    outline: none;
    border-color: ${COLORS.FOCUS};
  }

  ${props =>
    !props.hasValue &&
    `
    font-size: 1rem;
  `}

  ${props =>
    props.isTouchedWithError &&
    `
    &, &:focus {
      outline: none; 
      border-color: ${COLORS.ERROR};
    }
  `}

  ${props =>
    props.isTouchedNoError &&
    `
    & {
      border-color: ${COLORS.VALID};
    } 
  `}
`

const ScError = styled.div.attrs({
  className: 'font-description'
})`
  color: ${COLORS.ERROR};
`

const TextAreaField = props => {
  const { name, onChange, onBlur, value, placeholder, errMsg, touchState, className } = props
  return (
    <div className={className}>
      <ScTextArea
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        placeholder={placeholder}
        hasValue={!!value}
        isTouchedWithError={touchState === TOUCH_STATE.TOUCHED_ERR}
        isTouchedNoError={touchState === TOUCH_STATE.TOUCHED_NO_ERR}
      ></ScTextArea>
      {touchState === TOUCH_STATE.TOUCHED_ERR && <ScError>{errMsg}</ScError>}
    </div>
  )
}

TextAreaField.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  touchState: PropTypes.oneOf([
    TOUCH_STATE.UNTOUCH,
    TOUCH_STATE.TOUCHED_ERR,
    TOUCH_STATE.TOUCHED_NO_ERR
  ]).isRequired,
  errMsg: PropTypes.string,
  className: PropTypes.string
}

TextAreaField.defaultProps = {
  errMsg: null,
  className: ''
}

export default TextAreaField
