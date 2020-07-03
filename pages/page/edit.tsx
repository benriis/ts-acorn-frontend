import dynamic from 'next/dynamic'
import { GetServerSideProps } from 'next'
import axios from 'axios'
import Router from 'next/router'
const Editor = dynamic(() => import('../../components/EditorTest/EditorTest'), { ssr: false })

const Edit = ({ page, parent_id }: any) => {
  const updatePage = async (data: object) => {
    // updatePageHttp({...data, ...{id: parent_id}})

    await axios({
      method: 'patch',
      url: `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/pages/${parent_id}`,
      data: {
        id: 332,
        page: {...data, ...{id: parent_id}}
      },
      withCredentials: true
    })
    .then(res => Router.push(`/page/${res.data.data.id}`)
    )
  }

  return (
    <Editor submitData={updatePage} currentPage={page} />
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const parent_id = ctx.query.page
  const query_pages = `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/pages/${parent_id}`
  let pages = {data: {}}

  await axios.get(query_pages, {
    headers: {
      cookie: ctx.req.headers.cookie
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