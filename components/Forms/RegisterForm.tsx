import React, { useState } from 'react'
import styles from './Form.module.scss'
import { registerHttp } from '../../helpers/httprequests'

const RegisterForm = () => {
  let [input, setInput] = useState({
    email: "",
    password: "",
    passwordConfirmation: ""
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
    if (input.password == input.passwordConfirmation) {
      registerHttp(input)
    }
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
        <div className={styles.inputfield}>
          <label htmlFor="password">Password</label>
          <input type="password" name="passwordConfirmation" id="passwordConfirmation" onChange={handleChange} value={input.passwordConfirmation} placeholder="*******" />
        </div>
        <button className={styles.button} onClick={submit}>Register</button>
      </form>
    </div>
  )
}

export default RegisterForm