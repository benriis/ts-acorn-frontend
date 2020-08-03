import React, { ReactNode } from 'react'
import Head from 'next/head'
import styles from './Layout.module.scss'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Acorn' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
    </header>
      <div className={styles.container}>
        {children}
      </div>
    <footer className={styles.footer}>
      {/* script tag prevents flash of unstyled content when form is present  */}
      <script> </script>
    </footer>
  </div>
)

export default Layout
