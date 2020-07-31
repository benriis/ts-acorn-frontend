import PageRender from '../../components/PageRender/PageRender'
import { GetServerSideProps } from 'next'
import axios from 'axios'
import Cookies from 'universal-cookie'

const Slug = ({page}: any ) =>{

  return (
    <>
    <PageRender page={page}/>
    </>
  )
}

export default Slug

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = new Cookies(ctx.req.headers.cookie)
  const cookie = cookies.get('jwt')
  console.log("cookie: ",cookie)

  const params = ctx.params ? ctx.params.slug : null

  const query = `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/pages/${params}`
  const res = await axios.get(query, {
    headers: {
      Authorization: `Bearer ${cookie}`
    }
  })
  const page = await res.data.data
  return {
    props: { page }
  }
}