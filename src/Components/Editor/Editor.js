import Monaco from '../Monaco/Monaco';
import Preview from '../Preview/Preview';
import { useState } from 'react';

const Editor = () => {
  const [markdown, setMarkdown] = useState('');
  const handleEditorChange = (value, event) => {
    setMarkdown(value);
  }
  return (
    <main className="rg_container h-100">
      <div className="row m-0 h-100">
        <Monaco onChangeHandler={handleEditorChange}/>
        <Preview previewValue={markdown}/>
      </div>
    </main>
  )
}

export default Editor;