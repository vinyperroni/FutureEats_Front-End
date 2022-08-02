import { createTheme } from '@mui/material'
import {primaryColor, neutralColor} from "./colors"

const muiTheme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: "white"
    },
    text: {
        primary: neutralColor
    }
  }
})

export default muiTheme 