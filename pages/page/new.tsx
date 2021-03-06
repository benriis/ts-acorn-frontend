import dynamic from 'next/dynamic'
import { createPageHttp } from '../../helpers/httprequests'
import { GetServerSideProps } from 'next'
import Title from '../../components/Snacks/Title'
const Editor = dynamic(() => import('../../components/EditorTest/EditorTest'), { ssr: false })

type pageData = {
  title: string,
  content: string,
  topics: string,
  id: number,
  parent_id?: number
}

const New = ({ parentPostId }: any) => {
  
  
  const createPage = async (data: pageData) => {
    createPageHttp(data, parentPostId)
  }

  return (
    <>
    <Title title="Write page" />
    <Editor submitData={createPage} currentPage={null} />
    </>
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