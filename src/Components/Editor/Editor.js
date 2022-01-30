import Monaco from "../Monaco/Monaco";
import Preview from "../Preview/Preview";
import styles from "./Editor.module.scss";
import { useState, useEffect } from "react";

let marked = require("marked");

const Editor = (props) => {
  const [markdown, setMarkdown] = useState("");
  const [intial, setInitial] = useState("");
  const [editorActive, setEditorActive] = useState(true);
  const [docName, setDocName] = useState("Profile_readme.md");

  function handleEditorChange(value) {
    setMarkdown(marked(value));
    setInitial(value);
  }

  const setActiveView = (view) => {
    view === "editor" ? setEditorActive(false) : setEditorActive(true);
  };

  useEffect(() => {
    const readmePath = require("../../data/initial.md");
    fetch(readmePath.default)
      .then((res) => res.text())
      .then((res) => {
        setInitial(res);
        setMarkdown(marked(res));
      })
      .catch((err) => console.log(err));
  }, []);

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
            value={docName}
            required
            onChange={(e) => setDocName(e.target.value)}
          />
          <label className={`form-label`} htmlFor="color">
            Document name
          </label>
        </div>
        <div className={`${styles.ws_editor__inner} row m-0 w-100 h-100`}>
          <Monaco
            classSet={`${editorActive ? "d-block" : "d-none"} d-md-block`}
            setActiveView={setActiveView}
            initialValue={intial}
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
