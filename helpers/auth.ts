
import Cookies from 'universal-cookie'
import Router from 'next/router'
const cookies = new Cookies()
export const isBrowser = () => typeof window !== "undefined"

export const getUser = () => 
  isBrowser() && localStorage.getItem('user')
    ? localStorage.getItem('user')
    : null

export const setUser = (username: string) => {
  localStorage.setItem('user', username)
}

export const isLoggedIn = () => {
  const user = getUser()
  return !!user
}

export const logout = () => {
  cookies.remove('jwt')
  localStorage.removeItem('user')
  Router.push('/auth/login')
}