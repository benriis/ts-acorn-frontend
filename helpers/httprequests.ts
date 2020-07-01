import axios from 'axios'
import Router from 'next/router'

export const isBrowser = () => typeof window !== "undefined"

type UserLoginInfo = {
  email: string,
  password: string
}

export const loginHttp = async (data: UserLoginInfo) => {
  return await axios({
    method: 'post',
    url: `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/users/sign_in`,
    data: data,
    withCredentials: true,
  })
  .then(res => {
    let userStr = JSON.stringify(res.data.data.user)
    localStorage.setItem('user', userStr)
    console.log(res)
    
    return {
      status: res.status,
    }
  })
  .catch(err => {
    console.log(err)
    return {
      status: err.response!.status
    }
  })
}

export const logoutHttp = async () => {
  await axios({
    method: 'get',
    url: `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/users/log_out`,
    withCredentials: true,
  })
  .then(() => {
    localStorage.removeItem('user')
    Router.push('/')
  })
  .catch(err => {
    console.log(err)
  })
}