export interface LoginInfo {
  username: string
  password: string
}

export interface AuthContextType {
  login: (username: string) => void
  logout: () => void
}
