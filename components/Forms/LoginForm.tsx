import React, { useState } from 'react'
import styles from './Form.module.scss'
import { loginHttp } from '../../helpers/httprequests'
import Router from 'next/router'
import Link from 'next/link'
import InfoBox from '../Snacks/InfoBox'

const LoginForm = () => {
  let [input, setInput] = useState({
    username: "",
    password: ""
  })
  const information: string = "Use 'Username' and 'Password' as credentials to test Acorn"

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
            if (localStorage.getItem("user")) {
              Router.push("/")
            }
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
      <InfoBox text={information}/>
      <form className={styles.form}>
        <div className={styles.inputfield}>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" onChange={handleChange} value={input.username} placeholder="e.g. me@hey.com" />
        </div>
        <div className={styles.inputfield}>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" onChange={handleChange} value={input.password} placeholder="*******" />
        </div>
        <button className={styles.button} onClick={submit}>Log in</button>
        <div className={styles.link}>
          <p>Not a user?</p>
          <p>&nbsp;<Link href="/auth/register"><a>Register here</a></Link></p>
        </div>
      </form>
    </div>
  )
}

export default LoginForm