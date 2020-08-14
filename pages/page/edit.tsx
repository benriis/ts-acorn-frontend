import dynamic from 'next/dynamic'
import { GetServerSideProps } from 'next'
import axios from 'axios'
// import Router from 'next/router'
import Cookies from 'universal-cookie'
import { updatePageHttp } from '../../helpers/httprequests'
import Title from '../../components/Snacks/Title'
const Editor = dynamic(() => import('../../components/EditorTest/EditorTest'), { ssr: false })

type pageData = {
  title: string,
  content: string,
  topics: string,
  id: number,
  parent_id?: number
}

const Edit = ({ page, parent_id }: any) => {
  const updatePage = async (data: pageData) => {
    updatePageHttp({...data, ...{id: parent_id}})

    // await axios({
    //   method: 'patch',
    //   url: `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/pages/${parent_id}`,
    //   data: {
    //     id: 332,
    //     page: {...data, ...{id: parent_id}}
    //   },
    //   withCredentials: true
    // })
    // .then(res => Router.push(`/page/${res.data.data.id}`)
    // )
  }

  return (
    <>
    <Title title="Edit Page" />
    <Editor submitData={updatePage} currentPage={page} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = new Cookies(ctx.req.headers.cookie)
  const cookie = cookies.get('jwt')
  const parent_id = ctx.query.page
  const query_pages = `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/pages/${parent_id}`
  let pages = {data: {}}

  await axios.get(query_pages, {
    headers: {
      Authorization: `Bearer ${cookie}`
    }
  })
  .then(res => pages = res.data)
  .catch(() => ctx.res.statusCode = 401)

  return {
    props: {
      page: pages,
      parent_id: parent_id
    }
  }
}

export default Edit