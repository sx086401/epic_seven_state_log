import { ThemeOptions, createTheme } from '@mui/material'

declare module '@mui/material/styles' {
  interface Theme {
    background: {
      dark: string
    }
    text: {
      white: string
    }
    button: {
      deepGrey: string
    }
  }
  interface ThemeOptions {
    background?: {
      dark: string
    }
    text?: {
      white: string
    }
    button?: {
      deepGrey: string
    }
  }
}

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#F6F7F8',
    },
    secondary: {
      main: '#9C9EA0',
    },
    background: {
      default: 'rgb(15, 15, 15)',
    },
  },
  background: {
    dark: '#121212',
  },
  text: {
    white: '#f2f2f2',
  },
  button: {
    deepGrey: '#707070',
  },
}

export default createTheme(themeOptions)
