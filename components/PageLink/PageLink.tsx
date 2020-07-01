import Button from "../Button/Button";
import styles from './PageLink.module.scss'

type page = Object

const PageLink = ({pageProps}: {pageProps: page[]}) => {
  return (
    <div className={styles.container}>
      {pageProps.map((p: any) => (
        <Button key={p.id} href={`/page/${p.id}`} title={p.title}/>
      ))}
    </div>
  )
}

export default PageLink;