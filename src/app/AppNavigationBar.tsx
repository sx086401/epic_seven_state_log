import { AppBar, IconButton, Menu, MenuItem, Toolbar, styled } from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'
import { pathName } from 'constant'
import { theme } from 'styles'
import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const StyledAppBar = styled(AppBar)({
  minHeight: '56px',
  height: '56px',
  width: '100%',
  boxShadow: 'none',
  '& .MuiToolbar-root': {
    backgroundColor: theme.background.dark,
    minHeight: '56px',
    height: '56px',
  },
})

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

const StyledMenu = styled(Menu)({
  '& .MuiPaper-root': {
    minWidth: '180px',
  },
  '& .MuiMenuItem-root': {
    justifyContent: 'center',
  },
})

function AppNavigationBar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const navigate = useNavigate()

  const onMenuClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget)
  }, [])

  const onMenuClose = useCallback(() => setAnchorEl(null), [])

  const onLogoutClick = useCallback(() => navigate(pathName.login), [navigate])

  return (
    <StyledAppBar>
      <StyledToolbar>
        <IconButton disableRipple={true}>Epic Seven State</IconButton>
        <IconButton disableRipple={true} onClick={onMenuClick} sx={{ marginRight: '10px' }}>
          <MenuIcon />
        </IconButton>
        <StyledMenu open={!!anchorEl} anchorEl={anchorEl} onClose={onMenuClose}>
          <MenuItem onClick={onLogoutClick}>Logout</MenuItem>
        </StyledMenu>
      </StyledToolbar>
    </StyledAppBar>
  )
}

export default AppNavigationBar
