import React, { useState } from 'react'
import styles from './Form.module.scss'
import Router from 'next/router'
import { login } from '../../helpers/httprequests'

const LoginForm = () => {

  let [input, setInput] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e: any) => {
    e.persist()
    setInput(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
  }

  const submit = async (e: any) => {
    e.preventDefault()
    login(input)
      .then(res => {
        res.status == 200 
          ? Router.push(`/`) 
          : console.log("gtfo 401")
      })

    // await axios({
    //   method: 'post',
    //   url: `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/users/sign_in`,
    //   data: input,
    //   withCredentials: true,
    // })
    // .then(res => {
    //   let userStr = JSON.stringify(res.data.data.user)
    //   localStorage.setItem('user', userStr)
    //   Router.push(`/`)
    // })
    // .catch(err => {
    //   console.log(err)
    // })
  }

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.inputfield}>
          <label htmlFor="email">Username or email</label>
          <input type="text" name="email" id="email" onChange={handleChange} value={input.email} placeholder="e.g. me@hey.com" />
        </div>
        <div className={styles.inputfield}>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" onChange={handleChange} value={input.password} placeholder="*******" />
        </div>
        <button className={styles.button} onClick={submit}>Log in</button>
      </form>
    </div>
  )
}

export default LoginForm