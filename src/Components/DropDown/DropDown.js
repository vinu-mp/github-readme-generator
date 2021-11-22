import React, { useState } from "react";
import styles from "./DropDown.module.scss";

const DropDown = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <ul
      onClick={handleClick}
      className={`${styles.dropdown_menu} ${click ? styles.active : ""}`}
    >
      <li>
        <Link className={styles.dropdown_link} to="/html">
          HTML
        </Link>
      </li>
      <li>
        <Link className={styles.dropdown_link} to="/markdown">
          Markdown
        </Link>
      </li>
    </ul>
  );
};

export default DropDown;
