import Mde from '../../components/Mde/Mde'
import styles from './new.module.scss'

const New = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.meta}>
          <label>Title</label>
          <input className={styles.inputfield}/>
          <label>Tags</label>
          <input className={styles.inputfield}/>
        </div>
      <Mde />
      </form>
    </div>
  )
}

export default New