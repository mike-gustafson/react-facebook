import React, { useState } from "react";
import style from "../styles/Nav.module.css";
import { Avatar, IconButton } from '@mui/material';

// icons from https://mui.com/components/material-icons/
import AppsIcon from '@mui/icons-material/Apps';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import MessageIcon from '@mui/icons-material/Message';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';


export default function Nav({ onMenuItemClick }) {
    const [activeMenuItem, setActiveMenuItem] = useState('Newsfeed');

    const handleMenuItemClick = (menuItem) => {
        if (onMenuItemClick) {
            onMenuItemClick(menuItem);
        }
        setActiveMenuItem(menuItem);
    };

    return (
        <div className={style.navBar}>
            <div className={style.navBar_left}>
                <img src="/Facebook-Logos.png" className={style.fblogo} />
                <div className={style.navBar_input}>
                    <SearchIcon />
                    <input type="text" placeholder="Search Facebook" />
                </div>
            </div>
            <div className={style.navBar_center}>
                <div
                    className={`${style.navBar_center_item} ${activeMenuItem === 'Newsfeed' && style.navBar_center_item_active}`}
                    onClick={() => handleMenuItemClick('Newsfeed')}
                >
                    <HomeIcon fontSize="large" />
                </div>
                <div
                    className={`${style.navBar_center_item} ${activeMenuItem === 'Video' && style.navBar_center_item_active}`}
                    onClick={() => handleMenuItemClick('Video')}
                >
                    <OndemandVideoIcon fontSize="large" />
                </div>
                <div
                    className={`${style.navBar_center_item} ${activeMenuItem === 'SupervisedUserCircle' && style.navBar_center_item_active}`}
                    onClick={() => handleMenuItemClick('Tweets')}
                >
                    <SupervisedUserCircleIcon fontSize="large" />
                </div>
                <div
                    className={`${style.navBar_center_item} ${activeMenuItem === 'Gaming' && style.navBar_center_item_active}`}
                    onClick={() => handleMenuItemClick('Gaming')}
                >
                    <SportsEsportsIcon fontSize="large" />
                </div>
            </div>
            <div className={style.navBar_right}>
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <MessageIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <div className={style.navBar_info}>
                    <Avatar />
                </div>
            </div>
        </div>
    );
}
