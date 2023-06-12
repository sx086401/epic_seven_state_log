export interface AuthContextType {
  username?: string
  login: (username: string) => void
  logout: () => void
}
