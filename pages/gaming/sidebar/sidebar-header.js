import styles from '../../../styles/Sidebar.module.css'
import SettingsIcon from '@mui/icons-material/Settings';

export default function SidebarHeader() {
    return (
        <div className={styles.sidebar_header_region}>
            <div className={styles.sidebar_header}>
                <span className={styles.title}>Gaming</span>
                <span className={styles.rightIcon}>
                    <SettingsIcon className={styles.settings_icon} fontSize="large" />
                </span>
            </div>
        </div>
    )
}
