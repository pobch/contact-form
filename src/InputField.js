import styled from 'styled-components'
import React from 'react'
import PropTypes from 'prop-types'
import { COLORS } from './utils/styles'
import { TOUCH_STATE } from './utils/forms'

const ScFieldWrapper = styled.div`
  position: relative;
`

const ScInput = styled.input.attrs({
  className: 'font-small-body'
})`
  padding: 1.25rem 1.25rem 0;
  height: 3.125rem;
  border: 1px solid ${COLORS.GREY};
  width: 100%;
  margin-bottom: 5px;
  &:focus {
    outline: none;
    border-color: ${COLORS.FOCUS};
  }

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

const ScPlaceHolder = styled.span.attrs({
  className: 'font-small-body'
})`
  color: ${COLORS.GREY};
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(1.25rem, 1rem);
  transition: transform 0.5s, font-size 0.5s;

  ${ScInput}:focus + &,
  ${ScInput}:not([value='']) + & {
    transform: translate(1.25rem, 0.31rem);
    font-size: 0.79rem;
  }
`

const ScError = styled.div.attrs({
  className: 'font-description'
})`
  color: ${COLORS.ERROR};
`

const InputField = props => {
  const {
    id,
    type,
    onChange,
    onBlur,
    value,
    name,
    placeholder,
    errMsg,
    touchState,
    className
  } = props
  return (
    <ScFieldWrapper className={className}>
      <ScInput
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        isTouchedWithError={touchState === TOUCH_STATE.TOUCHED_ERR}
        isTouchedNoError={touchState === TOUCH_STATE.TOUCHED_NO_ERR}
      />
      <ScPlaceHolder>{placeholder}</ScPlaceHolder>
      {touchState === TOUCH_STATE.TOUCHED_ERR && <ScError>{errMsg}</ScError>}
    </ScFieldWrapper>
  )
}

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  touchState: PropTypes.oneOf([
    TOUCH_STATE.UNTOUCH,
    TOUCH_STATE.TOUCHED_ERR,
    TOUCH_STATE.TOUCHED_NO_ERR
  ]).isRequired,
  errMsg: PropTypes.string,
  className: PropTypes.string
}

InputField.defaultProps = {
  errMsg: null,
  className: ''
}

export default InputField
