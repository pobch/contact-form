import styled from 'styled-components'
import { withButtonDarkBlueStyle, MEDIA, COLORS } from './utils/styles'

export const SubmitButton = styled.button.attrs({
  className: 'font-button'
})`
  display: block;    
  margin: 0 auto;
  font-weight: 600;
  border: none;
  height: 3.125rem;
  width: 10.75rem;
  ${MEDIA.TABLET`
    width: 8.75rem;
  `}
  ${MEDIA.DESKTOP`
    height: 2.5rem;
  `}
  
  ${withButtonDarkBlueStyle}

  &:disabled,
  &:disabled:hover,
  &:disabled:active {
    background-color: ${COLORS.GREY};
  }
`
