import { BaseBackground } from 'common'
import { Box, styled } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { size } from 'constant'
import AppNavigationBar from './AppNavigationBar'
import AppSideMenu from './AppSideMenu'

const StyledBox = styled(Box)({
  width: '100%',
  height: '100%',
  boxSizing: 'border-box',
  paddingTop: size.navbarHeight,
  overflowY: 'scroll',
})

function AppMainLayout() {
  return (
    <BaseBackground>
      <AppNavigationBar />
      <AppSideMenu />
      <StyledBox component="main">
        <Outlet />
      </StyledBox>
    </BaseBackground>
  )
}

export default AppMainLayout
