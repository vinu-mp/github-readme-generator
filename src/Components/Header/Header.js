import styles from "./Header.module.scss";
import Logo from "../../assets/images/w-edit-logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [isBurgerMenuActive, setBurgerMenuActive] = useState(false);

  const toggleNav = () => {
    setBurgerMenuActive(!isBurgerMenuActive);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        <Link to="/" className={styles.header__logo}>
          <img src={Logo} alt="logo" />
        </Link>
        <div className="row m-0">
          <span
            onClick={toggleNav}
            className={`d-md-none ${styles["header__burger-menu"]} ${
              isBurgerMenuActive ? styles.active : ""
            }`}
          ></span>
          <ul
            className={`${styles.header__nav_menu} mb-0 d-md-flex ${
              isBurgerMenuActive ? styles.active : ""
            }`}
          >
            <li className={styles.header__nav_menu__item}>
              <Link
                to="/about"
                onClick={() => setBurgerMenuActive(false)}
                className={styles.header__nav_menu__link}
              >
                About
              </Link>
            </li>
            <li className={styles.header__nav_menu__item}>
              <span className={styles.header__nav_menu__link}>Download</span>
              <ul className={styles.header__nav_dd}>
                <li className={styles.header__nav_dd__item}>
                  <a className={styles.header__nav_dd__link}>HTML</a>
                </li>
                <li className={styles.header__nav_dd__item}>
                  <a className={styles.header__nav_dd__link}>Markdown</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
