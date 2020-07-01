import React from 'react'
import styles from './RegisterForm.module.scss'

const RegisterForm = () => {
  return (
    <fieldset className={styles.fieldset}>
      <legend>Register</legend>
    <form className={styles.form}>
      <div className={styles.inputfield}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" />
      </div>
      <div className={styles.inputfield}>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
      </div>
      <div className={styles.inputfield}>
        <label htmlFor="password">Retype password</label>
        <input type="password" name="password" />
      </div>
      <button className={styles.button}>Submit</button>
    </form>
    </fieldset>
  )
}

export default RegisterForm