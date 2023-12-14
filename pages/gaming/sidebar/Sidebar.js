import SidebarHeader from './sidebar-header';
import SidebarSearch from './sidebar-search';
import Yourgames from './your-games';
import Categories from './categories';
import styles from '../../../styles/Gaming.module.css';

export default function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <SidebarHeader/>
            <SidebarSearch/>
            <hr className={styles.divider}/>
            <Yourgames/>
            <hr className={styles.divider}/>
            <Categories/>
        </div>
    )
}