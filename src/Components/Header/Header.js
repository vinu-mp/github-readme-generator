import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.header_nav}>
        <ul className='mb-0'>
          <li><a href="/download" className={styles['header_nav-links']}>Download</a></li>
          <li><a href="/about" className={styles['header_nav-links']}>About</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;