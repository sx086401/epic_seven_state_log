import { Alert, Snackbar } from '@mui/material'
import { useCallback, useContext } from 'react'
import SnackBarContext from './SnackbarContext'

function GlobalSnackBar() {
  const { open, setOpen, snackbarProps, setSnackbarProps } = useContext(SnackBarContext)

  const handleClose = useCallback(() => {
    snackbarProps?.onClose?.()
    setSnackbarProps(null)
    setOpen(false)
  }, [setOpen, setSnackbarProps, snackbarProps])

  return open && snackbarProps ? (
    <Snackbar
      open={open}
      autoHideDuration={null}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      onClose={handleClose}
    >
      <Alert severity={snackbarProps.severity} sx={{ width: '100%', whiteSpace: 'pre-line' }}>
        {snackbarProps.message}
      </Alert>
    </Snackbar>
  ) : null
}

export default GlobalSnackBar
