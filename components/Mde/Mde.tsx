import { useState } from 'react';
import ReactMde from 'react-mde'
import * as Showdown from 'showdown'
import styles from './Mde.module.scss'

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true
});

const Mde = () => {
  const [value, setValue] = useState("**Hello world!!!**");
  const [selectedTab, setSelectedTab] = useState<"write" | "preview">("write");

  return (
    <div className={styles.container}>
      <div className="container">
        <ReactMde
          value={value}
          onChange={setValue}
          selectedTab={selectedTab}
          onTabChange={setSelectedTab}
          generateMarkdownPreview={markdown =>
            Promise.resolve(converter.makeHtml(markdown))
          }
        />
      </div>
    </div>
  )
}

export default Mde