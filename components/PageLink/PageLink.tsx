import styles from './PageLink.module.scss'

type page = Object

const PageLink = ({pageProps}: {pageProps: page[]}) => {
  return (
    <div className={styles.container}>
      {pageProps.reverse().map((p: any) => (
        <a className="btn-link" key={p.id} href={`/page/${p.id}`}>{p.title}</a>
      ))}
    </div>
  )
}

export default PageLink;