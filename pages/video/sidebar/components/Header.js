import styles from '../../../../styles/Video.module.css'
import SettingsIcon from '@mui/icons-material/Settings';

export default function SidebarHeader() {
    return (
        <div className={styles.HeaderContainer}>
            <div className={styles.Header}>
                <span className={styles.Title}>Video</span>
                <span className={styles.IconContainer}>
                    <SettingsIcon className={styles.Icon} fontSize="large" />
                </span>
            </div>
        </div>
    )
}
