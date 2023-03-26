import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <div className={styles.notfound_wrapper}>
      <p className={styles.notfound}>
        <span className={styles.code}>404</span>
        <span>You seem to have navigated way too far</span>
      </p>
      <Link to="/" className={styles.header__nav_menu__link}>
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
