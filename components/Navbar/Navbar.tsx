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

  let leftSideNav;
  if (isLoggedIn()) {
    leftSideNav = (
    <>
      <Button href={"/page/new"} title={"Write page"}/>
      <a onClick={handleLogout}>logout</a>
      <p className={styles.greeter}>Hey {getUser().email}</p>
    </>
    )
  } else {
    leftSideNav = (
    <>
      <Link href="/auth/register"><a className={styles.button}>Register</a></Link>
      <Link href="/auth/login"><a className={styles.button}>Login</a></Link>
    </>
    )
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.header}>
        <Link href="/"><h1 className={styles.logo}>ACORN</h1></Link>
      </div>
      {leftSideNav}
    </nav>
  )
}

export default Navbar
