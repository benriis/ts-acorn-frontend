import React from 'react'
import styles from './Tag.module.scss'
import Link from 'next/link'

type tag = Object
const Tag = ({tagProps}: {tagProps: Object[]}) => (
  <>
    <div className={styles.tags}>
      {tagProps.sort((a, b) => (b.count || b.id) - (a.count || a.id)).map((t: tag) => (
        <Link href="/" key={t.id}><a className={styles.tag}>{t.text}{t.count ? ` ${t.count}` : null}</a></Link>
      ))}
    </div>
  </>
)



export default Tag