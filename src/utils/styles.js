import { css } from 'styled-components'

const COLORS = {
  // style-guide
  BLACK: '#000000',
  BLOOD_ORANGE: '#F34E00',
  DARK_GREEN: '#146A61',
  GREY: '#AAAAAA',
  BUBBLEGUM: '#FB6ECF',
  YELLOW: '#F0D348',
  PALE_SALMON: '#F9B2A0',
  SOFT_BLUE: '#5892FF',
  TWILIGHT_BLUE: '#0B4667',
  TWILIGHT_BLUE_90: 'rgba(11, 70, 103, 0.9)',
  VERY_LIGHT_GREY: '#E5E5E5',
  WHITE: '#FFFFFF',
  GRAY: '#EEEEEE',
  // custom
  BLUE_TALE: '#5993ff',
  DARK_YELLOW: '#d5b834',
  BLUE_EXTRA_DARK: '#08354d',
  VERY_LIGHT_PINK: '#fc6fcf',
  SPECIAL_PINK: '#fc78d2',
  PURPLE: '#6f1cc9',
  // form
  FOCUS: '#5993ff',
  VALID: '#12ac4d',
  ERROR: '#ff0000',

  //social button fow follow-us section
  BLUE: '#436ebf'
}

const DEVICE_MINWIDTH = {
  MOBILE: 414, // < MOBILE  is mobile_s (use only when it has 4 design views)
  TABLET: 768, // < TABLET  is mobile
  DESKTOP: 1128 // < DESKTOP  = tablet,  >= DESKTOP is Desktop
}

const MEDIA = {
  MOBILE: (...args) => {
    return css`
      @media (max-width: ${DEVICE_MINWIDTH.TABLET - 0.1}px) {
        ${css(...args)}
      }
    `
  },
  TABLET: (...args) => {
    return css`
      @media (min-width: ${DEVICE_MINWIDTH.TABLET}px) and (max-width: ${DEVICE_MINWIDTH.DESKTOP -
          0.1}px) {
        ${css(...args)}
      }
    `
  },
  DESKTOP: (...args) => {
    return css`
      @media (min-width: ${DEVICE_MINWIDTH.DESKTOP}px) {
        ${css(...args)}
      }
    `
  }
}

const withButtonDarkBlueStyle = ` 
  color: ${COLORS.WHITE};
  background-color: ${COLORS.TWILIGHT_BLUE}; 
  svg { fill: ${COLORS.WHITE}; }

  &:hover {
    background-color: ${COLORS.YELLOW};
  }

  &:active {
    background-color: ${COLORS.DARK_YELLOW};
  }    
`

export { COLORS, MEDIA, withButtonDarkBlueStyle }
