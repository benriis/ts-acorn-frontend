import React, { useState } from 'react'
import styles from './Navbar.module.scss'
import Link from 'next/link'
import { isLoggedIn, getUser, logout } from '../../helpers/auth'
import Hamburger from './Hamburger'

const Navbar = () => {
  const [active, setActive] = useState<boolean>(false)

  const handleLogout = async (e: any) => {
    e.preventDefault()
    logout()
    toggleMenu()
  }

  const toggleMenu = () => {
    setActive(!active)
  }

  let leftSideNav;

  isLoggedIn()
  ? leftSideNav = (
    <>
      <Link href="/"><a onClick={() => toggleMenu()} className="btn-link">Index</a></Link>
      <Link href="/page/new"><a onClick={() => toggleMenu()} className="btn-link">Write page</a></Link>
      <a href="#" onClick={handleLogout} className="btn-link">logout</a>
      <p onClick={toggleMenu} className={styles.greeter}>Hey {getUser()}</p>
    </>
    )
  : leftSideNav = (
    <>
      <Link href="/auth/register"><a onClick={() => toggleMenu()} className="btn-link">Register</a></Link>
      <Link href="/auth/login"><a onClick={() => toggleMenu()} className="btn-link">Login</a></Link>
    </>
    )


  return (
    <nav className={styles.navbar}>
      <div className={styles.header}>
        <Link href="/"><h1 onClick={() => active ? toggleMenu() : null} className={styles.logo}>ACORN</h1></Link>
      </div>
      <button onClick={toggleMenu}>
        <Hamburger active={active} />
        <p>Menu</p>
      </button>
      <div className={`${styles.leftSide} ${active ? styles.active : ''}` }>
        {leftSideNav}
      </div>
    </nav>
  )
}

export default Navbar
