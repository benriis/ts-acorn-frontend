import { GetServerSideProps } from "next"
import axios from 'axios'
import { useEffect } from "react"
import PageLink from "../../components/PageLink/PageLink"

const Index = (props: any) => {
  useEffect(() => {
    console.log(props)
  })
  return (
    <PageLink pageProps={props.data}/>
) 
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let query = `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/pages`

  if (ctx.query) {
    query += "?"
    Object.keys(ctx.query).forEach(key => {
      query += `${key}=${ctx.query[key]}&`
    })
  }
  if (ctx.req.headers.cookie) {
    const res = await axios(query, {
      headers: {
        Cookie: ctx.req.headers.cookie
      }
    })
    const posts = await res.data
    return {
      props: posts
    }
  } else {
    return {
      props: {
        error: "error"
      }
    }
  }

}

export default Index