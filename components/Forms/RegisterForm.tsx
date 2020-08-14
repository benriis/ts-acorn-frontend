import React, { useState } from 'react'
import styles from './Form.module.scss'
import { registerHttp } from '../../helpers/httprequests'
import Link from 'next/link'
import InfoBox from '../Snacks/InfoBox'

const RegisterForm = () => {
  let [input, setInput] = useState({
    username: "",
    password: "",
    passwordConfirmation: ""
  })

  const information: string =  "Acorn only supports username/password credentials"

  const handleChange = (e: any) => {
    e.persist()
    setInput(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
  }

  const submit = async (e: any) => {
    e.preventDefault()
    if (input.password == input.passwordConfirmation) {
      registerHttp(input)
    }
  }

  return (
    <div className={styles.container}>
      <InfoBox text={information} />
      <form className={styles.form}>
        <div className={styles.inputfield}>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" onChange={handleChange} value={input.username} placeholder="e.g. me@hey.com" />
        </div>
        <div className={styles.inputfield}>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" onChange={handleChange} value={input.password} placeholder="*******" />
        </div>
        <div className={styles.inputfield}>
          <label htmlFor="password">Retype password</label>
          <input type="password" name="passwordConfirmation" id="passwordConfirmation" onChange={handleChange} value={input.passwordConfirmation} placeholder="*******" />
        </div>
        <button className={styles.button} onClick={submit}>Register</button>
        <div className={styles.link}>
          <p>Already a user?</p>
          <p>&nbsp;<Link href="/auth/login"><a>Log in here</a></Link></p>
        </div>
      </form>
    </div>
  )
}

export default RegisterForm