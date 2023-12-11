import Link from 'next/link';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import styles from '../../../styles/Sidebar.module.css';

export default function Yourgames (){
    return (
      <div>
        <hr className={styles.divider}/>
        <div className={styles.sidebar_header}>
          <span className={styles.sidebar_subtitle}>Your games</span> <span className={styles.rightIcon}><Link className={styles.link} href="/">See All</Link></span></div>
        <p className={styles.text_block}>Save a game to Your games to create a shortcut for it here</p>
        <div className={styles.sidebarLink}>
          <BookmarkIcon className={styles.link_icon} fontSize="large" />Save games
        </div>
        
        <hr className={styles.divider}/>
      </div>
    )
  }