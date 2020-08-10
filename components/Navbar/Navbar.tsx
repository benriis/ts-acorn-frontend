import React from 'react'
import styles from './Navbar.module.scss'
import Link from 'next/link'
import { isLoggedIn, getUser, logout } from '../../helpers/auth'
import Hamburger from './Hamburger'

const Navbar = () => {

  const handleLogout = async (e: any) => {
    e.preventDefault()
    logout()
  }

  let leftSideNav;
  if (isLoggedIn()) {
    leftSideNav = (
    <>
      <Link href="/page/new"><a className="btn-link">+ Write page</a></Link>
      <a href="#" onClick={handleLogout} className="btn-link">logout</a>
      <p className={styles.greeter}>Hey {getUser()}</p>
    </>
    )
  } else {
    leftSideNav = (
    <>
      <Link href="/auth/register"><a className="btn-link">Register</a></Link>
      <Link href="/auth/login"><a className="btn-link">Login</a></Link>
    </>
    )
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.header}>
        <Link href="/"><h1 className={styles.logo}>ACORN</h1></Link>
      </div>
      <div className={styles.leftSideWeb}>
        {leftSideNav}
      </div>
      <div className={styles.leftSideMobile}>
        <Hamburger />
      </div>
    </nav>
  )
}

export default Navbar
