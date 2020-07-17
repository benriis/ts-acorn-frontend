import axios from 'axios'
import Router from 'next/router'

export const isBrowser = () => typeof window !== "undefined"

type UserLoginInfo = {
  email: string,
  password: string
}

type LoginObject = {
  status: number
}

export const loginHttp = async (data: UserLoginInfo): Promise<LoginObject> => {
  return await axios({
    method: 'post',
    url: `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/users/sign_in`,
    data: data,
    withCredentials: true,
  })
  .then(res => {
    let userStr = JSON.stringify(res.data.data.user)
    localStorage.setItem('user', userStr)
    return {
      status: 200
    }
  })
  .catch(() => {
    return {
      status: 400
    }
  })
}

export const registerHttp = async (data: UserLoginInfo) => {
  await axios({
    method: 'post',
    url: `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/users`,
    data: {user: data},
    withCredentials: true
  })
  .then(() => {
    loginHttp(data).then(() => Router.push("/"))
  })
  .catch(err => console.log(err))
}

export const logoutHttp = async () => {
  await axios({
    method: 'get',
    url: `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/users/log_out`,
    withCredentials: true,
  })
  .then(res => {
    console.log(res)
    localStorage.removeItem('user')
    Router.push("/")
  })
  .catch(err => {
    console.log(err)
  })
}

export const createPageHttp = async (data: object, parent_id?: number) => {
  const dataToSend = {page: {...data, ...{parent_id: parent_id}}}
  await axios({
    method: 'post',
    url: `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/pages`,
    data: dataToSend,
    withCredentials: true
  })
  .then(res => Router.push(`/page/${res.data.data.id}`))
  .catch(err => console.log(err))
}

export const updatePageHttp = async (data: object) => {
  console.log(data)
  await axios({
    method: 'patch',
    url: `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/pages`,
    data: {
      id: 332,
      page: data
    },
    withCredentials: true
  })
  .then(res => Router.push(`/page/${res.data.data.id}`)
  )
}