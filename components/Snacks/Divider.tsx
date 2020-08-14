import React, { useState } from 'react';
import styles from './Divider.module.scss';
import Link from 'next/link';

type IDivider = {
  title: string,
  currentQuery: object
}

const Divider = ({title, currentQuery}: IDivider) => {
  useState(() => {
    console.log(currentQuery)
  })

  return (
    <div className={styles.divider}>
      <p>{title} </p>
      <Link href={{pathname: `/page`, query:{order: "ascending"}}}><a>Ascending</a></Link>
    </div>
  )
}

export default Divider;