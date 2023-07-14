import { PropsWithChildren, useState } from 'react'
import SnackBarContext, { SnackbarProps } from './SnackbarContext'

function SnackbarProvider({ children }: PropsWithChildren) {
  const [open, setOpen] = useState<boolean>(false)
  const [snackbarProps, setSnackbarProps] = useState<SnackbarProps | null>(null)

  return (
    <SnackBarContext.Provider value={{ open, setOpen, snackbarProps, setSnackbarProps }}>
      {children}
    </SnackBarContext.Provider>
  )
}

export default SnackbarProvider
