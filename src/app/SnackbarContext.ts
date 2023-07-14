import { AlertColor } from '@mui/material'
import { Dispatch, SetStateAction, createContext } from 'react'

export interface SnackbarProps {
  severity: AlertColor
  message: string
  onClose?: () => void
}

interface SnackBarContextType {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  snackbarProps: SnackbarProps | null
  setSnackbarProps: Dispatch<SetStateAction<SnackbarProps | null>>
}

export default createContext<SnackBarContextType>({
  open: false,
  setOpen: () => ({}),
  snackbarProps: null,
  setSnackbarProps: () => ({}),
})
