import { AppBar, Toolbar, ToolbarProps, styled } from '@mui/material'
import { ReactNode } from 'react'

const StyledAppBar = styled(AppBar)({
  backgroundColor: 'transparent',
  backgroundImage: 'none',
  boxShadow: 'none',
})

interface Props {
  children?: ReactNode
  toolbarProps?: ToolbarProps
}

function BaseStickyBar({ children, toolbarProps }: Props) {
  return (
    <StyledAppBar position="sticky">
      {children && <Toolbar {...toolbarProps}>{children}</Toolbar>}
    </StyledAppBar>
  )
}

export default BaseStickyBar
