import style from '../../../../styles/Video.module.css';
import SearchIcon from '@mui/icons-material/Search';


export default function SidebarSearch() {
  return (
    <div className={style.SearchContainer}>
      <div className={style.Search}>
        <span className={style.SearchBar}>
          <SearchIcon className={style.Icon} />
          <input type="text" placeholder="Search videos" className={style.Input} />
        </span>
      </div>
    </div>
  )
}