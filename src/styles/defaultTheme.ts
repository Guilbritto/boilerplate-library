import {DefaultTheme} from 'styled-components'


export const defaultTheme: DefaultTheme = {
  name: 'default',
  colors:{
    primary: '#2B52DD',
    secondary: '#004282 ',
    neutral:{
      white: "#FFF",
      light:  "#F4F6FC",
      soft:   "#A7ADBF",
      medium: "#6D7384",
      dark :  "#2B2C32",
    },
    suport: {
      success: "#3EB96F",
      alert: "#FBC436",
      error: "#E73A33",
    }
  },
  borderRadius: "4px",
  fontSizes:{
    small: "12px",
    medium: "14px",
    large: "16px",
    xlarge: "18px",
  }
}
