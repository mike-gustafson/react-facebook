import Main from './main/Main';
import Sidebar from './sidebar/Sidebar';
import styles from '../../styles/Video.module.css';

export default function Videos() {
    return (
        <div className={styles.Container}>
            <div className={styles.Sidebar}>
            <Sidebar />
            </div>
            <div className={styles.Main}>
            <Main />
            </div>
        </div>
    )
}