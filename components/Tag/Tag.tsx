import React from 'react'
import styles from './Tag.module.scss'
import Link from 'next/link'

const Tag = ({tagProps}: {tagProps: Object[]}) => (
  <>
    <div className={styles.tags}>
    <Link href="/"><a className={styles.tag}>All</a></Link>
      {tagProps.sort((a: any, b: any) => (b.count || b.id) - (a.count || a.id)).map((t: any) => (
        <Link href={{pathname: `/page`, query:{tag: t.text}}} key={t.id}><a className={styles.tag}>{t.text}{t.count ? ` ${t.count}` : null}</a></Link>
      ))}
    </div>
  </>
)



export default Tag