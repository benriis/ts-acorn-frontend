import styles from './PageLink.module.scss'
import Link from 'next/link';
import { IPageLink } from '../../interfaces';

const PageLink = ({pageProps}: {pageProps: IPageLink[]}) => {
  return (
    <div className={styles.container}>
      {pageProps.map((p: IPageLink) => (
        <Link href={`/page/${p.id}`} key={p.id}><a className="btn-link">{p.title}</a></Link>
      ))}
    </div>
  )
}

export default PageLink;