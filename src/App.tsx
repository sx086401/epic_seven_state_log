import { Button, CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from 'styles'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Button>HI</Button>
    </ThemeProvider>
  )
}

export default App
