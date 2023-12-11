import SidebarHeader from './sidebar/sidebar-header';
import SidebarSearch from './sidebar/sidebar-search';
import Yourgames from './sidebar/your-games';
import Categories from './sidebar/categories';
import styles from '../../styles/Sidebar.module.css';

export default function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <SidebarHeader/>
            <SidebarSearch/>
            <Yourgames/>
            <Categories/>
        </div>
    )
}