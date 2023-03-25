import styles from "./Monaco.module.scss";
import MonacoEditor from "@monaco-editor/react";
import { ImEye } from "react-icons/im";

const Monaco = (props) => {
  return (
    <div className={`${props.classSet} d-md-block col-md-6 px-0 h-100`}>
      <div className={styles.monaco_header}>
        <h6>Markdown</h6>
        <ImEye
          onClick={() => props.setActiveView("editor")}
          className={`${styles["monaco_header-icon"]} d-md-none`}
        />
      </div>
      <MonacoEditor
        className={styles.monaco_inner}
        height="100%"
        loading="Hang on tight..."
        defaultLanguage="markdown"
        value={props.initialValue}
        onChange={props.onChangeHandler}
        options={{
          padding: {
            top: "15px",
            bottom: "15px",
          },
          lineDecorationsWidth: "10px",
          overviewRulerBorder: false,
          autoIndent: "full",
          minimap: { enabled: false },
          wordWrap: "on",
          formatOnType: true,
          formatOnPaste: true,
          smoothScrolling: true,
          scrollBeyondLastLine: false,
          scrollbar: {
            verticalScrollbarSize: "5px",
            alwaysConsumeMouseWheel: false,
          },
        }}
      />
    </div>
  );
};

export default Monaco;
