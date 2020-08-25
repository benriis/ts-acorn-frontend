import React from 'react'
import styles from './Form.module.scss'
import { loginHttp, UserLoginInfo } from '../../helpers/httprequests'
import { useForm } from 'react-hook-form'
import Router from 'next/router'
import Link from 'next/link'
import InfoBox from '../Snacks/InfoBox'


const LoginForm = () => {
  const { register, handleSubmit, errors} = useForm<UserLoginInfo>({
    defaultValues: {
      username: "",
      password: ""
    }
  });

  const onSubmit = async (data: UserLoginInfo) => {
    loginHttp(data)
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
      <InfoBox text="Use 'Test' and 'Password' as credentials to test Acorn"/>
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
        <input className={styles.submit} type="submit" value="Login"/>
        <div className={styles.link}>
          <p>Not a user?</p>
          <p>&nbsp;<Link href="/auth/register"><a>Register here</a></Link></p>
        </div>
      </form>
    </div>
  )
}

export default LoginForm