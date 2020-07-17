import React, { useState } from 'react'
import styles from './Form.module.scss'
import { loginHttp } from '../../helpers/httprequests'
import Router from 'next/router'

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
    loginHttp(input)
    .then(res => {
      switch (res.status) {
        case 200:
          Router.push("/")
          break;
        case 400:
          alert("Username or password doesn't match")
          break;
        default:
          alert("something went wrong, try again")
          break;
      }
    })
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