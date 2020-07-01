import SimpleMDE from "react-simplemde-editor";
import styles from './EditorTest.module.scss'

const EditorTest = () => {
  const handleChange = value => {
    console.log(value)
  };

  return (
    <div>
      <div className={styles.metaContainer}> 
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title"/>
        <label htmlFor="tags">Tags</label>
        <input type="text" id="tags" name="tags" placeholder="Seperate tags by comma, eg: (tagone, tagtwo)"/>
      </div>
      <SimpleMDE 
        onChange={handleChange} 
        options={{
          autofocus: true,
          spellChecker: false,
        }}  
      />
    </div>
  )
}
export default EditorTest