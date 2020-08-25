import React from 'react'
import styles from './Form.module.scss'
import { registerHttp } from '../../helpers/httprequests'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import InfoBox from '../Snacks/InfoBox'

type UserRegisterInfo = {
  username: string,
  password: string,
  passwordConfirmation: string
}

const RegisterForm = () => {
  const { register, getValues, handleSubmit, errors} = useForm<UserRegisterInfo>({
    defaultValues: {
      username: "",
      password: "",
      passwordConfirmation: ""
    }
  });

 

  const onSubmit = async (data:UserRegisterInfo) => {
    registerHttp(data)
  }

  return (
    <div className={styles.container}>
      <InfoBox text="Acorn only supports username/password credentials" />
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <label>
          Username
          <input 
            className={errors.username && styles.error} 
            type="text" 
            name="username" 
            ref={register({
              required: "Username can't be empty", 
              pattern: {
                value: /^[a-zA-Z0-9]{4,16}$/,
                message: "Username must be between 4 to 16 characters"
              }
            })}
          />
          {errors.username && <span className={styles.error}>{errors.username.message}</span>}
        </label>
        <label>
          Password
          <input 
            className={errors.password && styles.error} 
            type="password" name="password" 
            ref={register({
              required: "Password can't be empty", 
              minLength: {
                value: 6,
                message: "Must be atleast 6 characters"
              }
            })} 
          />
          {errors.password && <span className={styles.error}>{errors.password.message}</span>}
        </label>
        <label>
          Retype Password
          <input 
            className={errors.passwordConfirmation && styles.error} 
            type="password" name="passwordConfirmation" 
            ref={register({
              required: "Password can't be empty", 
              validate: value => {
                const { password } = getValues();
                return value === password || "Password should match"
              }
            })} 
          />
          {errors.passwordConfirmation && <span className={styles.error}>{errors.passwordConfirmation.message}</span>}
        </label>
        <input className={styles.submit} type="submit" value="Login"/>
        <div className={styles.link}>
          <p>Already a user?</p>
          <p>&nbsp;<Link href="/auth/register"><a>Login here</a></Link></p>
        </div>
      </form>
    </div>
  )
}

export default RegisterForm