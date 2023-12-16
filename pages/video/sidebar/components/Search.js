import style from '../../../../styles/Sidebar.module.css';
import SearchIcon from '@mui/icons-material/Search';


export default function SidebarSearch() {
  return (
    <div className={style.Container}>
      <div className={style.Search}>
        <span className={style.SearchBar}>
          <SearchIcon className={style.Icon} />
          <input type="text" placeholder="Search videos" className={style.Input} />
        </span>
      </div>
    </div>
  )
}