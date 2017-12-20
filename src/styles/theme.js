// src/styles/theme.js
import getMuiTheme from 'material-ui/styles/getMuiTheme'

// Colors
export const green        = '#7BDB4C'
export const red          = '#FD5454'
export const white        = '#ffffff'
export const black        = '#000000'
export const darkGrey     = '#555D60'
export const grey         = '#8E8E8E'
export const blueGrey     = '#789199'

// Palette
export const palette = {
  primary1Color: black,
  primary2Color: green,
  primary3Color: green,
  accent1Color: green,
  textColor: black,
  alternateTextColor: white,
  canvasColor: white,
  borderColor: grey
}

export default getMuiTheme({ palette })
