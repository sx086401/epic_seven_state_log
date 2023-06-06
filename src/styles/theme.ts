import { ThemeOptions, createTheme } from '@mui/material'

declare module '@mui/material/styles' {
  interface Theme {
    background: {
      grey: string
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
      grey: string
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
      main: '#444C55',
    },
    secondary: {
      main: '#F6F7F8',
    },
    background: {
      default: '#FAFAFA',
    },
    text: {
      primary: '#FAFAFA',
    },
  },
  background: {
    grey: '#9C9EA0',
  },
  text: {
    white: '#f2f2f2',
  },
  button: {
    deepGrey: '#707070',
  },
}

export default createTheme(themeOptions)
