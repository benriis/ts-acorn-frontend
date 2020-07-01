import { logoutHttp } from "./httprequests"

export const isBrowser = () => typeof window !== "undefined"

export const getUser = () => 
  isBrowser() && localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user')!)
    : null

export const setUser = (user: Object) => {
  localStorage.setItem('user', JSON.stringify(user))
}

export const isLoggedIn = () => {
  const user = getUser()
  return !!user
}

export const logout = () => {
  localStorage.removeItem('user')
  logoutHttp();
}