import React from 'react'
import styles from './Navbar.module.scss'
import Link from 'next/link'
import Button from '../Button/Button'
import { isLoggedIn, getUser, logout } from '../../helpers/auth'
import axios from 'axios'
import Router from 'next/router'

const Navbar = () => {

  const handleLogout = async (e: any) => {
    logout()
    e.preventDefault()
    await axios({
      method: 'get',
      url: `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/users/log_out`,
      withCredentials: true,
    })
    .then(res => {
      console.log(res)
      localStorage.removeItem('user')
      Router.push('/auth/login')
    })
    .catch(err => {
      console.log(err)
    })
  }

  let hey = null
  if (isLoggedIn()) {
    hey = (
    <>
      <Button href={"/editorPage"} title={"Write page"}/>
      <Link href="/auth/login"><a onClick={handleLogout}>logout</a></Link>
      <p>hey {getUser().email}</p>
    </>
    )
  } else {
    hey = (
    <>
      <Link href="/auth/register"><a className={styles.button}>Register</a></Link>
      <Link href="/auth/login"><a className={styles.button}>Login</a></Link>
    </>
    )
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.header}>
        <Link href="/"><h1>ACORN</h1></Link>
      </div>
      {isLoggedIn() ?
        <div>
          {hey}
        </div>
        :
        <>
          {hey}
        </>
      }
    </nav>
  )
}

export default Navbar