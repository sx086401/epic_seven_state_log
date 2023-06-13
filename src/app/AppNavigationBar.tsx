import { AppBar, IconButton, Menu, MenuItem, Toolbar, styled } from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'
import { pathName, size } from 'constant'
import { theme } from 'styles'
import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const StyledAppBar = styled(AppBar)({
  minHeight: size.navbarHeight,
  height: size.navbarHeight,
  width: '100%',
  boxShadow: 'none',
  '& .MuiToolbar-root': {
    backgroundColor: theme.background.dark,
    minHeight: size.navbarHeight,
    height: size.navbarHeight,
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
  const { t } = useTranslation('app')
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const navigate = useNavigate()

  const handleMenuClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget)
  }, [])

  const handleTitleClick = useCallback(() => navigate(pathName.states), [navigate])

  const handleMenuClose = useCallback(() => setAnchorEl(null), [])

  const handleLogoutClick = useCallback(() => navigate(pathName.login), [navigate])

  return (
    <StyledAppBar>
      <StyledToolbar>
        <IconButton disableRipple={true} onClick={handleTitleClick}>
          {t('title')}
        </IconButton>
        <IconButton disableRipple={true} onClick={handleMenuClick} sx={{ marginRight: '10px' }}>
          <MenuIcon />
        </IconButton>
        <StyledMenu open={!!anchorEl} anchorEl={anchorEl} onClose={handleMenuClose}>
          <MenuItem onClick={handleLogoutClick}>{t('logout')}</MenuItem>
        </StyledMenu>
      </StyledToolbar>
    </StyledAppBar>
  )
}

export default AppNavigationBar
