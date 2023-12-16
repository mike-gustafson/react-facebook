import style from '../../../styles/Sidebar.module.css'
import SettingsIcon from '@mui/icons-material/Settings';

export default function Header() {
    return (
        <div className={style.Container}>
            <div className={style.Header}>
                <span className={style.Title}>Gaming</span>
                <span className={style.IconContainer}>
                    <SettingsIcon className={style.Icon} fontSize="large" />
                </span>
            </div>
        </div>
    )
}
