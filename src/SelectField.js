import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { COLORS } from './utils/styles'
import { TOUCH_STATE } from './utils/forms'
import DROPDOWN_ICON from './images/icon-dropdown-arrow.svg'

const ScSelect = styled.select.attrs({
  className: 'font-small-body'
})`
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  display: block;
  height: 3.125rem;
  padding: 0 1.25rem;
  width: 100%;
  border: 1px solid ${COLORS.GREY};
  background-color: unset;
  background-image: url(${DROPDOWN_ICON});
  background-repeat: no-repeat;
  background-position: right 0.7em top 50%;
  background-size: 0.65em auto;
  margin-bottom: 5px;
  white-space: nowrap;
  &:focus {
    outline: none;
    border-color: ${COLORS.FOCUS};
  }
  /* IE11 not support appearance, use this instead */
  &::-ms-expand {
    display: none;
  }

  /* When it is in invalid state */
  ${props =>
    props.isTouchedWithError &&
    `
    &, &:focus {
      outline: none;
      border-color: ${COLORS.ERROR};
    }
  `}

  /* When it is in valid state */
  ${props =>
    props.isTouchedNoError &&
    `
    & {
      border-color: ${COLORS.VALID};
    }
  `}
`

const ScOption = styled.option.attrs({
  className: 'font-small-body'
})``

const ScError = styled.div.attrs({
  className: 'font-description'
})`
  color: ${COLORS.ERROR};
`

const SelectField = props => {
  const { name, onChange, onBlur, value, errMsg, touchState, className } = props

  return (
    <div className={className}>
      <ScSelect
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        name={name}
        isTouchedWithError={touchState === TOUCH_STATE.TOUCHED_ERR}
        isTouchedNoError={touchState === TOUCH_STATE.TOUCHED_NO_ERR}
      >
        <ScOption value="general-inquiry">General Inquiry</ScOption>
        <ScOption value="editorial">Editorial</ScOption>
        <ScOption value="technical-support">Technical Support</ScOption>
        <ScOption value="careers">Careers</ScOption>
        <ScOption value="business-partner-ad">Business, Partnerships &amp; Advertising</ScOption>
        <ScOption value="press">Press</ScOption>
        <ScOption value="rights-licensing">Rights &amp; Licensing</ScOption>
      </ScSelect>
      {touchState === TOUCH_STATE.TOUCHED_ERR && <ScError>{errMsg}</ScError>}
    </div>
  )
}

SelectField.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  touchState: PropTypes.oneOf([
    TOUCH_STATE.UNTOUCH,
    TOUCH_STATE.TOUCHED_ERR,
    TOUCH_STATE.TOUCHED_NO_ERR
  ]).isRequired,
  errMsg: PropTypes.string,
  className: PropTypes.string
}

SelectField.defaultProps = {
  errMsg: null,
  className: ''
}

export default SelectField
