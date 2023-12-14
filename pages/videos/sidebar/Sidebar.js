import SidebarSearch from './components/SidebarSearch';

import styles from '../../../styles/Videos.module.css';

export default function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <SidebarSearch />
        </div>
    )
}