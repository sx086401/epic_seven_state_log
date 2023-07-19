import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  Divider,
  IconButton,
  styled,
} from '@mui/material'
import { ReactNode } from 'react'
import CloseIcon from '@mui/icons-material/Close'

interface Props extends DialogProps {
  dialogTitle?: string
  onClose: () => void
  children?: ReactNode
  actionButtons?: ReactNode
  hideDivider?: boolean
  hideCloseIcon?: boolean
}

const StyledDialogTitle = styled(DialogTitle)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: '20px',
  padding: '8px 24px',
  '&>.MuiIconButton-root:hover': {
    background: 'transparent',
  },
})

const StyledDialogActions = styled(DialogActions)({
  padding: '0, 24px',
  paddingBottom: '20px',
})

function BaseModal({
  dialogTitle,
  onClose,
  children,
  actionButtons,
  hideDivider,
  hideCloseIcon,
  ...restProps
}: Props) {
  return (
    <Dialog {...restProps}>
      {dialogTitle && (
        <StyledDialogTitle>
          {dialogTitle}
          {!hideCloseIcon && (
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          )}
        </StyledDialogTitle>
      )}
      {!hideDivider && <Divider />}
      <DialogContent>{children}</DialogContent>
      <StyledDialogActions>{actionButtons}</StyledDialogActions>
    </Dialog>
  )
}

export default BaseModal
