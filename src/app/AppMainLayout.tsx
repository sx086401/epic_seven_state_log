import { BaseBackground } from 'common'
import { Outlet } from 'react-router-dom'

function AppMainLayout() {
  return (
    <BaseBackground>
      <Outlet />
    </BaseBackground>
  )
}

export default AppMainLayout
