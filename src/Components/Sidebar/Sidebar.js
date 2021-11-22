import { useState } from "react";
import Badges from "../Badges/Badges";
import Emoji from "../Emoji/Emoji";
import TechIcons from "../TechIcons/TechIcons";
import styles from "./Sidebar.module.scss";
import { SiOpenbadges } from "react-icons/si";
import { FaRegSmile } from "react-icons/fa";
import { BiCheckboxSquare } from "react-icons/bi";

const Sidebar = (props) => {
  const [activeItem, setActiveItem] = useState("");

  const onIconClickHandler = (item) => {
    setActiveItem(item);
    props.onSidebarClick(item);
  };
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar_nav}>
        <nav className={styles["sidebar_nav-list"]}>
          <ul>
            <li
              className={`${styles["sidebar_icon-wrapper"]} ${
                props.activeItem === "emoji" ? styles.active : ""
              }`}
              onClick={() => onIconClickHandler("emoji")}
            >
              <FaRegSmile className="fs-18" />
              <span className={styles.icon_tooltip}>Emojis</span>
            </li>
            <li
              className={`${styles["sidebar_icon-wrapper"]} ${
                props.activeItem === "badge" ? styles.active : ""
              }`}
              onClick={() => onIconClickHandler("badge")}
            >
              <SiOpenbadges className="fs-18" />
              <span className={styles.icon_tooltip}>Skill Badges</span>
            </li>
            <li
              className={`${styles["sidebar_icon-wrapper"]} ${
                props.activeItem === "icon" ? styles.active : ""
              }`}
              onClick={() => onIconClickHandler("icon")}
            >
              <BiCheckboxSquare className="fs-18" />
              <span className={styles.icon_tooltip}>Skill Icons</span>
            </li>
          </ul>
        </nav>
      </div>
      <div
        className={`${styles["sidebar_nav-contents"]} ${
          props.activeState ? styles.active : ""
        }`}
      >
        <div className="d-flex justify-content-between align-items-center p-16">
          <h4 className={styles["sidebar_nav-title"]}>
            {activeItem.toUpperCase()}
          </h4>
          <span
            onClick={() => props.onSidebarClose(false)}
            className={styles["sidebar_nav-close"]}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              fill="currentColor"
              className="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
            </svg>
          </span>
        </div>
        <div
          className={`${styles["sidebar_nav-outer"]} ${
            props.activeItem === "emoji" ? styles.active : ""
          }`}
        >
          <Emoji />
        </div>
        <div
          className={`${styles["sidebar_nav-outer"]} ${
            props.activeItem === "badge" ? styles.active : ""
          }`}
        >
          <Badges />
        </div>
        <div
          className={`${styles["sidebar_nav-outer"]} ${
            props.activeItem === "icon" ? styles.active : ""
          }`}
        >
          <TechIcons />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
