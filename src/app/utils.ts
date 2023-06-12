import { localStorageKey } from 'constant'

export function getUserToken() {
  return localStorage.getItem(localStorageKey.userToken)
}

export function setUserToken(username: string) {
  return localStorage.setItem(localStorageKey.userToken, username)
}

export function removeUserToken() {
  return localStorage.removeItem(localStorageKey.userToken)
}
