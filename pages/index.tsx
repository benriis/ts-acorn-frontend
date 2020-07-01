import Tag from '../components/Tag/Tag'
import axios from 'axios'
import { GetServerSideProps } from 'next'
import PageLink from '../components/PageLink/PageLink'
import Router from 'next/router'
import { isBrowser, logout } from '../helpers/auth'


type props = {
  tags?: Object[],
  pages?: Object[],
  errorMessage?: string
}

const IndexPage = ({tags, pages, errorMessage}: props) => {
  if (isBrowser()) {
    if (!!errorMessage) {
      logout()
      Router.push(`/auth/login`)
    }
  }

  return (
    <>
    <p>Most used tags</p>
    {tags !== undefined &&
      <Tag tagProps={tags} />
    }
    <p>Recent pages</p>
    {pages !== undefined &&
      <PageLink pageProps={pages}/>
    }
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const query_tags = `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/topics`
  const query_pages = `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/pages`
  
  await axios.get(query_tags, {
    headers: {
      cookie: ctx.req.headers.cookie 
    }
  })
  .then(res => console.log(res.status))
  .catch(err => console.log(err.response.status))

  const res_pages = await axios.get(query_pages, {
    headers: {
      cookie: ctx.req.headers.cookie
    }
  })

  const result = await res_pages
  console.log("======================================")
  console.log(result)
  console.log("======================================")


  
  // const tags = await res_tags.data
  // const pages = await res_pages.data
  
  // console.log(pages)
  // console.log(tags)

  return {
    props: { 
      // tags: tags.data,
      // pages: pages.data 
    }
  }
}
 

export default IndexPage
