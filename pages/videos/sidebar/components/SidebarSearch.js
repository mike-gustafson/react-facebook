import styles from '../../../../styles/Videos.module.css';
import SearchIcon from '@mui/icons-material/Search';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function SidebarSearch() {
    return (
      <div className={styles.sidebar_search_region}>
        <div className={styles.search_input}>
          <SearchIcon className={styles.search_icon}/>
          <input type="text" placeholder="Search Gaming" className={styles.search_input} />
        </div>     
        <div className={styles.sidebarLink}>
          <SportsEsportsIcon className={styles.link_icon} fontSize="large" /> Play games
        </div>
        <div className={styles.sidebarLink}>
          <NotificationsIcon className={styles.link_icon} />Notifications
        </div>
      </div>
    )
  }