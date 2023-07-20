import { AuthContextType } from './types'
import { PropsWithChildren, useCallback, useMemo } from 'react'
import { removeUserToken, setUserToken } from './utils'
import AuthContext from './authContext'

const useProvideAuth = (): AuthContextType => {
  const login = useCallback((username: string) => {
    setUserToken(username)
  }, [])

  const logout = useCallback(() => {
    removeUserToken()
  }, [])

  return useMemo(() => ({ login, logout }), [login, logout])
}

function AuthProvider({ children }: PropsWithChildren) {
  const auth = useProvideAuth()

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export default AuthProvider
