import styles from './Header.module.scss';
import Logo from '../../assets/images/w-edit-logo.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.header_nav}>
        <a className={styles.header_logo} href="#">
          <img src={Logo} alt="logo"/>
        </a>
        <ul className='mb-0'>
          <li><a href="/download" className={styles['header_nav-links']}>Download</a></li>
          <li><a href="/about" className={styles['header_nav-links']}>About</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;