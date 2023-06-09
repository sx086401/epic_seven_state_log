import { LoginPage } from 'features/login'
import { Navigate, Route, Routes } from 'react-router-dom'
import { pathName } from 'constant'
import AppMainLayout from './AppMainLayout'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={pathName.login} replace={true} />} />
      <Route path={pathName.login} element={<LoginPage />} />
      <Route path="/" element={<AppMainLayout />}></Route>
    </Routes>
  )
}

export default AppRoutes
