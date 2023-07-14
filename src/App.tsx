import { BaseCenter } from 'common'
import { CircularProgress, CssBaseline, ThemeProvider } from '@mui/material'
import { HashRouter } from 'react-router-dom'
import { Suspense, useMemo } from 'react'
import { theme } from 'styles'
import AppRoutes from 'app/AppRoutes'
import AuthProvider from 'app/AuthProvider'
import GlobalSnackBar from 'app/GlobalSnackBar'
import SnackbarProvider from 'app/SnackbarProvider'

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
          <SnackbarProvider>
            <CssBaseline />
            <GlobalSnackBar />
            <HashRouter>
              <AppRoutes />
            </HashRouter>
          </SnackbarProvider>
        </ThemeProvider>
      </AuthProvider>
    </Suspense>
  )
}

export default App
