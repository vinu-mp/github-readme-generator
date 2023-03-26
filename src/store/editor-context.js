import React, { createContext, useState, useEffect } from "react";

const EditorContext = createContext({
  value: "",
  fileName: "",
  setInitial: () => {},
});

const EditorContextProvider = ({ children }) => {
  const [markDownData, setMarkDownData] = useState("");
  const [fileName, setFileName] = useState("profile_readme");

  useEffect(() => {
    const readmePath = require("../Data/initial.md");
    fetch(readmePath.default)
      .then((res) => res.text())
      .then((res) => {
        setMarkDownData(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const contextValue = {
    markDownData,
    fileName,
    setMarkDownData,
    setFileName,
  };

  return (
    <EditorContext.Provider value={contextValue}>
      {children}
    </EditorContext.Provider>
  );
};

export default EditorContext;
export { EditorContextProvider };
