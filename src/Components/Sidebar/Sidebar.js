import styles from './Sidebar.module.css';
import { useState } from 'react';

const Sidebar = (props) => {
  // const [isActive, setSidebarActive] = useState(false);
  // const iconClickHandler = (event) => {
  //   setSidebarActive(prevState => !prevState);
  // }

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar_nav}>
        <a href="/" className={styles.sidebar_logo}>WE</a>
        <nav className={styles['sidebar_nav-list']}>
          <ul>
            <li className={styles['sidebar_icon-wrapper']} onClick={() => props.onSidebarClick('emoji')}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className={`${styles.sidebar_icon} bi bi-emoji-smile`} viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
              </svg>
              <span className={styles.icon_tooltip}>Emojis</span>
            </li>
            <li className={styles['sidebar_icon-wrapper']} onClick={() => props.onSidebarClick('badge')}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className={`${styles.sidebar_icon} bi bi-aspect-ratio`} viewBox="0 0 16 16">
                <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5v-9zM1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" />
                <path d="M2 4.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H3v2.5a.5.5 0 0 1-1 0v-3zm12 7a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H13V8.5a.5.5 0 0 1 1 0v3z" />
              </svg>
              <span className={styles.icon_tooltip}>Skill Badges</span>
            </li>
            <li className={styles['sidebar_icon-wrapper']} onClick={() => props.onSidebarClick('icon')}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className={`${styles.sidebar_icon} bi bi-aspect-ratio`} viewBox="0 0 16 16">
                <path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z" />
              </svg>
              <span className={styles.icon_tooltip}>Skill Icons</span>
            </li>
          </ul>
        </nav>
      </div>
      <div className={`${styles['sidebar_nav-contents']} ${props.activeState ? 'active' : ''}`}>

      </div>
    </div>
  )
}

export default Sidebar;