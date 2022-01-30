import styles from "./Header.module.scss";
import Logo from "../../assets/images/w-edit-logo.png";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  const [isBurgerMenuActive, setBurgerMenuActive] = useState(false);
  const [activeDropDown, setActiveDropDown] = useState(null);

  const dropDownClickHandler = (event) => {
    if (activeDropDown && activeDropDown !== event.currentTarget) {
      activeDropDown && activeDropDown.classList.remove(styles.active);
    }
    event.currentTarget.classList.toggle(styles.active);
    setActiveDropDown(event.currentTarget);
  };

  const toggleNav = () => {
    setBurgerMenuActive(!isBurgerMenuActive);
  };

  const NavItems = [
    {
      key: "ABOUT",
      type: "Link",
      redirect: "/about",
    },
    {
      key: "PREVIEW AS",
      type: "dropdown",
      children: [
        {
          key: "HTML",
          type: "inpage",
        },
      ],
    },
    {
      key: "TOOLS",
      type: "Link",
      redirect: "/tools",
    },
    {
      key: "DOWNLOAD AS",
      type: "dropdown",
      children: [
        {
          key: "HTML",
          type: "inpage",
        },
        {
          key: "Markdown",
          type: "inpage",
        },
      ],
    },
  ];

  const createDropDown = (item) => {
    return (
      <li
        key={item.key}
        className={styles.header__nav_menu__item}
        onClick={(event) => dropDownClickHandler(event)}
      >
        <div className={`${styles.header__nav_menu__link} c-pointer`}>
          {item.key}
          <MdKeyboardArrowDown className={styles.nav_icon} />
        </div>
        <ul className={`${styles.header__nav_dd}`}>
          {item.children.map((elem) => {
            if (elem.type === "inpage") {
              return (
                <li key={elem.key} className={styles.header__nav_dd__item}>
                  {elem.key}
                </li>
              );
            } else {
              return (
                <li key={elem.key} className={styles.header__nav_dd__item}>
                  <NavLink
                    to={elem.redirect}
                    className={styles.header__nav_menu__link}
                  >
                    {elem.key}
                  </NavLink>
                </li>
              );
            }
          })}
        </ul>
      </li>
    );
  };

  const createLink = (item) => {
    return (
      <li key={item.key} className={styles.header__nav_menu__item}>
        {item.type.toLowerCase() === "link" ? (
          <Link to={item.redirect} className={styles.header__nav_menu__link}>
            {item.key}
          </Link>
        ) : (
          <div className={styles.header__nav_menu__link}>{item.key}</div>
        )}
      </li>
    );
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
            className={`${styles.header__nav_menu} mb-0 p-0 d-md-flex ${
              isBurgerMenuActive ? styles.active : ""
            }`}
          >
            {NavItems.map((item) => {
              return item.type === "dropdown"
                ? createDropDown(item)
                : createLink(item);
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
