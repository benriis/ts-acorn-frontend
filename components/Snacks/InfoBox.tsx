import React from 'react'
import styles from './InfoBox.module.scss'

const InfoBox = ({text}: {text: string}) => {
 return (
    <div className={styles.infobox}>
      <h5>
        <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16"><path fillRule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path></svg>
        </span>
        &nbsp;Important
      </h5>
      <p>{text} </p>
    </div>
 )
}

export default InfoBox;