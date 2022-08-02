import { createTheme } from '@mui/material'
import {primaryColor, neutralColor, secondaryColor} from "./colors"

const muiTheme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: "black"
    },
    secondary: {
      main: secondaryColor
    },
    text: {
        primary: neutralColor
    }
  }
})

export default muiTheme 