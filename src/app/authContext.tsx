import { AuthContextType } from './types'
import { createContext } from 'react'

export default createContext<AuthContextType>({
  username: '',
  login: () => ({}),
  logout: () => ({}),
})
