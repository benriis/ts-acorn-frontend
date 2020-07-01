import React from 'react'
import styles from './Navbar.module.scss'
import Link from 'next/link'
import Button from '../Button/Button'
import { isLoggedIn, getUser, logout } from '../../helpers/auth'

const Navbar = () => {

  const handleLogout = async (e: any) => {
    e.preventDefault()
    logout()
  }

  let rightNav = null
  if (isLoggedIn()) {
    rightNav = (
    <>
      <Button href={"/editorPage"} title={"Write page"} />
      <a className={styles.button} onClick={handleLogout}>logout</a>
      <p>Hey {getUser().email}</p>
    </>
    )
  } else {
    rightNav = (
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
        <>
          {rightNav}
        </>
        :
        <>
          {rightNav}
        </>
      }
    </nav>
  )
}

export default Navbar