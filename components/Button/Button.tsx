import Link from "next/link"
import styles from './Button.module.scss'

type button = {
  href: string,
  id?: number,
  title: string
}

const Button = (props: button) => {
  return (
    <Link href={props.href}><a className={styles.button}>{props.title}</a></Link>
  )
}

export default Button