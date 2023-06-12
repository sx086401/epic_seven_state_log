import { BaseCenter } from 'common'
import { CircularProgress, CssBaseline, ThemeProvider } from '@mui/material'
import { HashRouter } from 'react-router-dom'
import { Suspense, useMemo } from 'react'
import { theme } from 'styles'
import AppRoutes from 'app/AppRoutes'
import AuthProvider from 'app/AuthProvider'

function App() {
  const loadingScreen = useMemo(
    () => (
      <BaseCenter>
        <CircularProgress />
      </BaseCenter>
    ),
    []
  )

  return (
    <Suspense fallback={loadingScreen}>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <HashRouter>
            <AppRoutes />
          </HashRouter>
        </ThemeProvider>
      </AuthProvider>
    </Suspense>
  )
}

export default App
