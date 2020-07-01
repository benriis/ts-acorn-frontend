import dynamic from 'next/dynamic'
const Editor = dynamic(() => import('../components/EditorTest/EditorTest'), { ssr: false })

const EditorPage = () => {
  // const editor = null;
  // // useEffect(() => {
  // //   const editor = new EditorJS();
  // // }, [])
  // if (typeof window !== "undefined") {
  //   const editor = new EditorJS();
  // }
  
  return (
    <Editor />
  )
}

export default EditorPage