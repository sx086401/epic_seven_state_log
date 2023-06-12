import { LoginPage } from 'features/login'
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom'
import { StatesPage } from 'features/states'
import { getUserToken } from './utils'
import { pathName } from 'constant'
import AppMainLayout from './AppMainLayout'

function ProtectedRoute() {
  const username = getUserToken()
  const location = useLocation()

  if (!username) {
    return <Navigate to={pathName.login} state={{ from: location.pathname }} />
  }

  return <Outlet />
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={pathName.login} replace={true} />} />
      <Route path={pathName.login} element={<LoginPage />} />
      <Route path="/" element={<AppMainLayout />}>
        <Route element={<ProtectedRoute />}>
          <Route path={pathName.states} element={<StatesPage />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default AppRoutes
