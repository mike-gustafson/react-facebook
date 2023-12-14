import Sidebar from './sidebar/Sidebar';
import styles from '../../styles/Gaming.module.css';

export default function Videos() {
    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
            <Sidebar />
            </div>
            <div className={styles.main}>
            Main Videos Area
            </div>
        </div>
    )
}