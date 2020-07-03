import { useEffect } from 'react'
import styles from './PageRender.module.scss'
import Tag from "../Tag/Tag"
import Link from 'next/link'
import Button from '../Button/Button'
import * as Showdown from 'showdown'
import hljs from '../../helpers/highlight'

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true
});

type pageProps = {
  page: {
    content: string,
    id: number,
    title: string,
    parent: {title: string, id: number}
    children: {title: string, id: number}[]
    parent_id: number,
    topics: {id: number, text: string}[]
  }
}


const PageRender = ({ page }: pageProps) => {
  
  useEffect(() => {
    hljs.initHighlighting.called = false;
    hljs.initHighlighting();
    
  },[])

  return (
    <div className={styles.container}>
        <h1>{page.title}</h1>
      <div className={styles.tags}>
        <Tag tagProps={page.topics} />
      </div>
      <div dangerouslySetInnerHTML={{__html: converter.makeHtml(page.content)}} />
      <div>
        <Link href={{pathname: `/page/new`, query: {page: page.id}}}><a>Create new Page</a></Link>
        <Link href={{pathname: `/page/edit`, query: {page: page.id}}}><a>Edit Post</a></Link>
        <div>
          {!!page.parent &&
            <Button href={`/page/${page.parent.id}`} title={`\u2190 ${page.parent.title}`} />
          }
          <div className={styles.stringList}>
          {page.children.map((c: any) => (
            <Button key={c.id} href={`/page/${c.id}`} title={`${c.title} \u2192`}></Button>
          ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageRender