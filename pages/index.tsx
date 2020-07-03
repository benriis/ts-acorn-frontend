import Tag from '../components/Tag/Tag'
import axios from 'axios'
import { GetServerSideProps } from 'next'
import PageLink from '../components/PageLink/PageLink'
import Router from 'next/router'
import { isBrowser, logout } from '../helpers/auth'


type props = {
  tags?: Object[],
  pages?: Object[],
  statusCode?: number
}

const IndexPage = ({tags, pages, statusCode}: props) => {
  if (isBrowser()) {
    if (statusCode == 401) {
      logout()
      Router.push(`/auth/login`)
    }
  }

  return (
    <>
      {statusCode !== 401 &&
        <>
          {tags !== undefined &&
            <>
              <p>Most used tags</p>
              <Tag tagProps={tags} />
            </>
          }
          {pages !== undefined &&
            <>
              <p>Recent pages</p>
              <PageLink pageProps={pages}/>
            </>
          }
        </>
      }
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const query_tags = `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/topics`
  const query_pages = `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/pages`
  let pages = {data: {}}
  let tags = {data: {}}

  await axios.get(query_tags, {
    headers: {
      cookie: ctx.req.headers.cookie 
    }
  })
  .then(res => tags = res.data)
  .catch(() => ctx.res.statusCode = 401)

  await axios.get(query_pages, {
    headers: {
      cookie: ctx.req.headers.cookie
    }
  })
  .then(res => pages = res.data)
  .catch(() => ctx.res.statusCode = 401)

  return {
    props: { 
      tags: tags.data,
      pages: pages.data,
      statusCode: ctx.res.statusCode
    }
  }
}
 

export default IndexPage
