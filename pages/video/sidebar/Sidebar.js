import Links from './components/Links';
import Search from './components/Search';
import Header from './components/Header';
import Explore from './components/Explore';

import styles from '../../../styles/Sidebar.module.css';

export default function Sidebar({ onLinkClick }) {
    return (
        <div className={styles.sidebar}>
            <Header />
            <Search />
            <Links onLinkClick={onLinkClick}/>
            <hr className={styles.Divider} />
            <Explore />
        </div>
    )
}