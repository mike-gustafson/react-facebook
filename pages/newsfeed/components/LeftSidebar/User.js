import { Avatar } from '@mui/material';

import style from '../../../../styles/Newsfeed.module.css';

export default function User() {
    return (
    <div>
        <ul className={style.sidebarList}>

            <li className={style.sidebarLink}>
                <Avatar  className={style.sidebarAvatar}/>Username
            </li>

        </ul>
    </div>
    )
}