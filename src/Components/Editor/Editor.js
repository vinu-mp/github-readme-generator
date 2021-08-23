import Monaco from '../Monaco/Monaco';
import Preview from '../Preview/Preview';
import { useState } from 'react';

import styles from './Editor.module.css';

const Editor = () => {
  const [markdown, setMarkdown] = useState('');
  const handleEditorChange = (value, event) => {
    setMarkdown(value);
  }

  return (
    <main className={`${styles.editor}`}>
      <div className={`${styles['editor-inner']} row m-0 w-100 h-100`}>
        <Monaco onChangeHandler={handleEditorChange}/>
        <Preview previewValue={markdown}/>
      </div>
    </main>
  )
}

export default Editor;