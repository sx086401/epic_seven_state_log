import { BaseBackground } from 'common'
import { Outlet } from 'react-router-dom'
import AppNavigationBar from './AppNavigationBar'

function AppMainLayout() {
  return (
    <BaseBackground>
      <AppNavigationBar />
      <Outlet />
    </BaseBackground>
  )
}

export default AppMainLayout
