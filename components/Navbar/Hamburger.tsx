import React from 'react';
import styles from './Hamburger.module.scss';

const Hamburger = ({active}: {active: boolean}) => {
  return (
    <div className={`${styles.button} ${active ? styles.active : ''}` }>
      <div />
      <div />
      <div />
    </div>
  )
}

export default Hamburger;