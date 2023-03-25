import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Editor from "../../Components/Editor/Editor";
import styles from "./EditorHome.module.scss";

const EditorHome = () => {
  const [activeItem, setActiveItem] = useState("");
  const [isSidebarActive, setSidebarActive] = useState(false);

  const onSideBarIconClick = (target) => {
    setActiveItem((prevState) => {
      if (prevState === target || !target) {
        prevState = "";
        setSidebarActive(false);
      } else {
        prevState = target;
        setSidebarActive(true);
      }
      return prevState;
    });
  };

  return (
    <section className={`${styles.ws_layout_wrapper} editor d-md-flex`}>
      <Sidebar
        onSidebarClose={onSideBarIconClick}
        onSidebarClick={onSideBarIconClick}
        activeState={isSidebarActive}
        activeItem={activeItem}
      />
      <Editor activeState={isSidebarActive} />
    </section>
  );
};

export default EditorHome;
