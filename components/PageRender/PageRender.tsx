import styles from './PageRender.module.scss'
import Tag from "../Tag/Tag"

type pageProps = {
  page: {
    content: string,
    id: number,
    title: string,
    parent_id: number,
    topics: {id: number, text: string}[]
  }
}


const PageRender = ({ page }: pageProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.tags}>
        <h1>{page.title}</h1>
        <Tag tagProps={page.topics} />
      </div>
      <div dangerouslySetInnerHTML={{__html: page.content}} />
    </div>
  )
}

export default PageRender