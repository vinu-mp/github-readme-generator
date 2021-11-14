import Monaco from '../Monaco/Monaco';
import Preview from '../Preview/Preview';
import styles from './Editor.module.scss';
import { useState, useEffect } from 'react';

let marked = require("marked");

const Editor = (props) => {
  const [markdown, setMarkdown] = useState('');
  const [intial, setInitial] = useState('');
  const [editorActive, setEditorActive] = useState(true);

  function handleEditorChange(value) {
    setMarkdown(marked(value));
    setInitial(value);
  }

  const setActiveView = (view) => {
    view === 'editor' ? setEditorActive(false) : setEditorActive(true);
  }

  useEffect(() => {
    const readmePath = require("../../data/initial.md");
    fetch(readmePath.default)
      .then(res => res.text())
      .then(res => {
        setInitial(res);
        setMarkdown(marked(res))
      })
      .catch(err => console.log(err));
  }, [])

  return (
    <main className={`${styles.editor} ${props.activeState ? styles.active : ''}`}>
      <div className={`${styles['editor-inner']} row m-0 w-100 h-100`}>
        <Monaco classSet={`${editorActive ? 'd-block' : 'd-none'} d-md-block`} setActiveView={setActiveView} initialValue={intial} onChangeHandler={handleEditorChange} />
        <Preview classSet={`${editorActive ? 'd-none' : 'd-block'} d-md-block`} setActiveView={setActiveView} previewValue={markdown} />
      </div>
    </main>
  )
}

export default Editor;