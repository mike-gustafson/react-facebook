import Header from './Header';
import Search from './Search';
import Yourgames from './your-games';
import Categories from './Categories';
import style from '../../../styles/Sidebar.module.css';

export default function Sidebar() {
    return (
        <div className={style.Sidebar}>
            <Header/>
            <Search />
            <hr className={style.Divider}/>
            <Yourgames/>
            <hr className={style.Divider}/>
            <Categories/>
        </div>
    )
}