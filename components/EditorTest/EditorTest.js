import { useState, useEffect } from 'react'
import SimpleMDE from "react-simplemde-editor";
import styles from './EditorTest.module.scss'


const EditorTest = ({submitData, currentPage}) => {
  const [metaData, setMetaData] = useState({
    title: "",
    topics: "",
    content: ""
  })

  useEffect(() => {
    if (currentPage) {
      setMetaData(prev => ({
        ...prev,
        title: currentPage.data.title,
        topics: currentPage.data.topics.map(t => t.text).join(", "),
        content: currentPage.data.content
      }))
      // setValue(props.post.posts.data.content)
    }
  }, [])

  const handleChange = e => {
    e.persist()
    setMetaData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
  }
  const handleChangeMd = value => {
    setMetaData(prev => ({
      ...prev,
      content: value
    }))
  }

  return (
    <div>
      <div className={styles.metaContainer}> 
        <label htmlFor="title">Title</label>
        <input onChange={handleChange} value={metaData.title} type="text" id="title" name="title"/>
        <label htmlFor="tags">Tags</label>
        <input onChange={handleChange} value={metaData.topics} type="text" id="topics" name="topics" placeholder="Seperate tags by comma, eg: (tagone, tagtwo)"/>
      </div>
      <SimpleMDE 
      onChange={handleChangeMd}
      value={metaData.content}
        options={{
          autofocus: true,
          spellChecker: false,
        }}  
      />
      <button className={styles.button} onClick={() => submitData(metaData)}>Submit</button>
    </div>
  )
}
export default EditorTest