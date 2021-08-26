import styles from './Monaco.module.css';
import MonacoEditor from "@monaco-editor/react";

const Monaco = (props) => {
  return (
    <div className="col-md-6 px-0 h-100">
      <div className={styles.monaco_header}>
        <h6>Markdown</h6>
      </div>
      <div className={styles.monaco_editor}>
        {console.log('tet',props.initialValue)}
        <MonacoEditor
          height="90vh"
          loading='Hang on while we loads...'
          defaultLanguage="markdown"
          defaultValue={props.initialValue}
          onChange={(value, event) => props.onChangeHandler(value, event)}
        />
      </div>
    </div>
  )
}

export default Monaco;