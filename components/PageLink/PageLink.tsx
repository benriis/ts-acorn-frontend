import styles from './PageLink.module.scss'
import Link from 'next/link';

type page = Object

const PageLink = ({pageProps}: {pageProps: page[]}) => {
  return (
    <div className={styles.container}>
      {pageProps.map((p: any, i: number) => (
        <Link href={`/page/${p.id}`} key={i}><a className="btn-link">{p.title}</a></Link>
      ))}
    </div>
  )
}

export default PageLink;