import styles from './Monaco.module.css';
import MonacoEditor from "@monaco-editor/react";

const Monaco = (props) => {
  return (
    <div className="col-md-6 px-0 h-100">
      <div className={styles.monaco_header}>
        <h6>Markdown</h6>
      </div>
      <div className={styles.monaco_editor}>
        <MonacoEditor
          height="100%"
          loading='Hang on tight...'
          defaultLanguage="markdown"
          value={props.initialValue}
          onChange={props.onChangeHandler}
          options={{
            autoIndent: 'full',
            minimap: { enabled: false },
            wordWrap: "on",
            formatOnType: true,
            formatOnPaste: true,
            smoothScrolling: true,
            scrollBeyondLastLine: false,
            scrollbar: {
              verticalScrollbarSize: '5px',
              alwaysConsumeMouseWheel: false,
            }
          }}
        />
      </div>
    </div>
  )
}

export default Monaco;