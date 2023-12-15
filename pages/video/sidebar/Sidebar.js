import Search from './components/Search';
import Header from './components/Header';
import Explore from './components/Explore';
import Links from './components/Links';

import styles from '../../../styles/Video.module.css';

export default function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <Header />
            <Search />
            <Links />
            <hr className={styles.Divider} />
            <Explore />
        </div>
    )
}