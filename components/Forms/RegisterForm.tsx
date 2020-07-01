import React from 'react'
import styles from './Form.module.scss'

const RegisterForm = () => {
  return (
    <div className={styles.container}>
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
    </div>
  )
}

export default RegisterForm