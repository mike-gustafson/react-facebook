import style from '../../../styles/Sidebar.module.css';
import SearchIcon from '@mui/icons-material/Search';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Search() {
    return (
      <div className={style.Container}>
        <div className={style.SearchBar}>
          <SearchIcon className={style.Icon}/>
          <input type="text" placeholder="Search Gaming" className={style.Input} />
        </div>     
        <div className={style.Link}>
          <SportsEsportsIcon className={style.Icon} fontSize="large" /> Play games
        </div>
        <div className={style.Link}>
          <NotificationsIcon className={style.Icon} />Notifications
        </div>
      </div>
    )
  }