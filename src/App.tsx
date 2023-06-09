import { CssBaseline, ThemeProvider } from '@mui/material'
import { HashRouter } from 'react-router-dom'
import { theme } from 'styles'
import AppRoutes from 'app/AppRoutes'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <AppRoutes />
      </HashRouter>
    </ThemeProvider>
  )
}

export default App
