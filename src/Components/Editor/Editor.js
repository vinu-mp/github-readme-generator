import Monaco from "../Monaco/Monaco";
import Preview from "../Preview/Preview";
import styles from "./Editor.module.scss";
import { useState, useEffect, useContext } from "react";
import EditorContext from "../../store/editor-context";

let marked = require("marked");

const Editor = (props) => {
  const editorContext = useContext(EditorContext);

  const [markdown, setMarkdown] = useState("");
  const [editorActive, setEditorActive] = useState(true);

  function handleEditorChange(value) {
    setMarkdown(marked(value));
    editorContext.setMarkDownData(value);
  }

  const setActiveView = (view) => {
    view === "editor" ? setEditorActive(false) : setEditorActive(true);
  };

  useEffect(() => {
    setMarkdown(marked(editorContext.markDownData));
  }, [editorContext.markDownData]);

  return (
    <main
      className={`${styles.ws_editor} ${
        props.activeState ? styles.active : ""
      }`}
    >
      <div className={styles.ws_editor__wrapper}>
        <div className={styles.ws_editor__item}>
          <input
            type="text"
            value={editorContext.fileName}
            required
            onChange={(e) => editorContext.setFileName(e.target.value)}
          />
          <label className={`form-label`} htmlFor="color">
            Document name
          </label>
        </div>
        <div className={`${styles.ws_editor__inner} row m-0 w-100 h-100`}>
          <Monaco
            classSet={`${editorActive ? "d-block" : "d-none"} d-md-block`}
            setActiveView={setActiveView}
            initialValue={editorContext.markDownData}
            onChangeHandler={handleEditorChange}
          />
          <Preview
            classSet={`${editorActive ? "d-none" : "d-block"} d-md-block`}
            setActiveView={setActiveView}
            previewValue={markdown}
          />
        </div>
      </div>
    </main>
  );
};

export default Editor;
