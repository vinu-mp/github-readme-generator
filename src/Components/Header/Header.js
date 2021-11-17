import styles from './Header.module.scss';
import Logo from '../../assets/images/w-edit-logo.png';
import { useState } from 'react';

const Header = () => {
  const [isBurgerMenuActive, setBurgerMenuActive] = useState(false);

  const toggleNav = () => {
    setBurgerMenuActive((prev) => !prev)
  }

  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        <a className={styles.header__logo} href="#">
          <img src={Logo} alt="logo"/>
        </a>
        <div className='row m-0'>
          <span onClick={toggleNav} className={`d-md-none ${styles['header__burger-menu']} ${isBurgerMenuActive ? styles.active : ''}`}></span>
          <ul className='mb-0 d-none d-md-flex'>
            <li><a href="/download" className={styles['header__nav-links']}>Download</a></li>
            <li><a href="/about" className={styles['header__nav-links']}>About</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header;