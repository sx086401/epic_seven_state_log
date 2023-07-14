import { useCallback, useContext } from 'react'
import SnackBarContext, { SnackbarProps } from 'app/SnackbarContext'

function useSnackbar() {
  const { setOpen, setSnackbarProps } = useContext(SnackBarContext)

  const setSnackbar = useCallback(
    (snackbarProps: SnackbarProps) => {
      setSnackbarProps(snackbarProps)
      setOpen(true)
    },
    [setOpen, setSnackbarProps]
  )

  return setSnackbar
}

export default useSnackbar
