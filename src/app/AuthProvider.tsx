import { AuthContextType } from './types'
import { PropsWithChildren, useCallback, useMemo, useState } from 'react'
import { removeUserToken, setUserToken } from './utils'
import AuthContext from './authContext'

const useProvideAuth = (): AuthContextType => {
  const [username, setUsername] = useState<string>('')

  const login = useCallback((username: string) => {
    setUserToken(username)
    setUsername(username)
  }, [])

  const logout = useCallback(() => {
    removeUserToken()
    setUsername('')
  }, [])

  return useMemo(() => ({ username, login, logout }), [login, logout, username])
}

function AuthProvider({ children }: PropsWithChildren) {
  const auth = useProvideAuth()

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export default AuthProvider
