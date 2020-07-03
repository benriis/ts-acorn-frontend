import dynamic from 'next/dynamic'
import { createPageHttp } from '../../helpers/httprequests'
import { GetServerSideProps } from 'next'
const Editor = dynamic(() => import('../../components/EditorTest/EditorTest'), { ssr: false })

const New = ({ parentPostId }: any) => {
  const createPage = async (data: object) => {
    createPageHttp(data, parentPostId)
  }

  return (
    <Editor submitData={createPage} currentPage={null} />
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const parent_id = ctx.query.page
  return {
    props: {
      parentPostId: parent_id ? parent_id : null
    }
  }
}

export default New