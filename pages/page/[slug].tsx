import PageRender from '../../components/PageRender/PageRender'
import { GetServerSideProps } from 'next'
import axios from 'axios'

const Slug = ({page}: any ) =>{

  return (
    <>
    <PageRender page={page}/>
    </>
  )
}

export default Slug

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const params = ctx.params ? ctx.params.slug : null

  const query = `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/pages/${params}`
  const res = await axios.get(query, {
    headers: {
      cookie: ctx.req.headers.cookie
    }
  })
  const page = await res.data.data
  return {
    props: { page }
  }
}