import Link from "next/link"

type button = {
  href: string,
  id?: number,
  title: string
}

const Button = (props: button) => {

  return (
    <Link href={props.href}><a>{props.title}</a></Link>
  )
  
}

export default Button