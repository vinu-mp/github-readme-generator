import styles from './Header.module.css';

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.header_logo}>Readme</div>
    </header>
  )
}

export default Header;