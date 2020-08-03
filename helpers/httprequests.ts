import axios from 'axios'
import Router from 'next/router'
import Cookies from 'universal-cookie' 
import { setUser } from './auth'
const cookies = new Cookies()

export const isBrowser = () => typeof window !== "undefined"
axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_HOST
axios.defaults.headers.post["Content-Type"] = "application/json"

type UserLoginInfo = {
  username: string,
  password: string
}

type LoginObject = {
  status: number
}

type pageData = {
  title: string,
  content: string,
  topics: string,
  id: number,
  parent_id?: number
}


export const loginHttp = async (data: UserLoginInfo): Promise<LoginObject> => {
  return await axios({
    method: 'post',
    url: "/api/users/sign_in",
    data: data
  })
  .then((res) => {
    cookies.set('jwt', res.data.jwt, { path: '/' })
    console.log(localStorage.getItem("user"))
    setUser(res.data.username)
    console.log(localStorage.getItem("user"))
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
  })
  .then(() => {
    loginHttp(data).then(() => Router.push("/"))
  })
  .catch(err => console.log(err))
}

export const createPageHttp = async (data: pageData, parent_id?: number) => {
  const token = cookies.get('jwt')
  const dataToSend = {page: {...data, ...{parent_id: parent_id}}}
  await axios({
    method: 'post',
    url: `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/pages`,
    data: dataToSend,
    headers: {
      authorization: `Bearer ${token}`
    }
  })
  .then(res => Router.push(`/page/${res.data.data.id}`))
  .catch(err => console.log(err))
}

export const updatePageHttp = async (data: pageData) => {
  const token = cookies.get('jwt')
  await axios({
    method: 'patch',
    url: `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/pages/${data.id}`,
    data: {
      page: data
    },
    headers: {
      authorization: `Bearer ${token}`
    }
  })
  .then(res => Router.push(`/page/${res.data.data.id}`)
  )
}

export const deletePageHttp = async (id: number) => {
  const token = cookies.get('jwt')
  await axios({
    method: 'delete',
    url: `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/pages/${id}`,
    headers: {
      authorization: `Bearer ${token}`
    }
  })
  .then(() => Router.push(`/`)
  .catch(err => console.log(err))
  )
}
