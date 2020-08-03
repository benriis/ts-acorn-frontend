import { useEffect } from 'react'
import styles from './PageRender.module.scss'
import Tag from "../Tag/Tag"
import Link from 'next/link'
import * as Showdown from 'showdown'
import hljs from '../../helpers/highlight'
import { IPage } from '../../interfaces/index'
import { deletePageHttp } from '../../helpers/httprequests'

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true
});

type pageProps = {
  page: IPage
}


const PageRender = ({ page }: pageProps) => {
  
  useEffect(() => {
    hljs.initHighlighting.called = false;
    hljs.initHighlighting();
    
  },[])

  const deletePage = async (e: any) => {
    e.preventDefault()
    deletePageHttp(page.id)
  }

  return (
    <div className={styles.container}>
        <h1>{page.title}</h1>
      <div className={styles.tags}>
        <Tag tagProps={page.topics} />
      </div>
      <div dangerouslySetInnerHTML={{__html: converter.makeHtml(page.content)}} />
      <div>
        <Link href={{pathname: `/page/new`, query: {page: page.id}}}><a className="btn-link">Create new Page</a></Link>
        <Link href={{pathname: `/page/edit`, query: {page: page.id}}}><a className="btn-link">Edit Page</a></Link>
        <a href="#" onClick={deletePage} className="btn-link">Delete Page</a>
        <div className={styles.related}>
          {!!page.parent &&
            <a className="btn-link" href={`/page/${page.parent.id}`}>{`\u2190 ${page.parent.title}`}</a>
          }
          <div className={styles.stringList}>
          {page.children.map((c: any) => (
            <a className="btn-link" key={c.id} href={`/page/${c.id}`}>{`${c.title} \u2192`}</a>
          ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageRender