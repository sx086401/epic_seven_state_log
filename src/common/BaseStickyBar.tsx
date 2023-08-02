import { AppBar, Toolbar, ToolbarProps, styled } from '@mui/material'
import { ReactNode } from 'react'

const StyledAppBar = styled(AppBar, { shouldForwardProp: (prop) => prop !== 'isTransparent' })(
  ({ isTransparent }: { isTransparent: boolean }) => ({
    backgroundColor: isTransparent ? 'transparent' : 'rgb(15, 15, 15)',
    backgroundImage: 'none',
    boxShadow: 'none',
    alignItems: 'center',
  })
)

interface Props {
  children?: ReactNode
  toolbarProps?: ToolbarProps
  isTransparent?: boolean
}

function BaseStickyBar({ children, toolbarProps, isTransparent = false }: Props) {
  return (
    <StyledAppBar position="sticky" isTransparent={isTransparent}>
      {children && <Toolbar {...toolbarProps}>{children}</Toolbar>}
    </StyledAppBar>
  )
}

export default BaseStickyBar
