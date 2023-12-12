import React, { useState } from 'react';
import styles from '../../../styles/Newsfeed.module.css';
import GroupIcon from '@mui/icons-material/Group';
import GamesIcon from '@mui/icons-material/Games';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import EventIcon from '@mui/icons-material/Event';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PublicIcon from '@mui/icons-material/Public';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PeopleIcon from '@mui/icons-material/People';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ExploreIcon from '@mui/icons-material/Explore';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Avatar } from '@mui/material';

const LeftSidebar = () => {
    const [showFullList, setShowFullList] = useState(false);
    const categories = [
        { icon: <GroupIcon />, label: 'Groups' },
        { icon: <GamesIcon />, label: 'Play games' },
        { icon: <VideoLibraryIcon />, label: 'Gaming video' },
        { icon: <BookmarkIcon />, label: 'Saved' },
        { icon: <EventIcon />, label: 'Events' },
        { icon: <LibraryBooksIcon />, label: 'Feeds' },
        { icon: <LocalHospitalIcon />, label: 'Blood donations' },
        { icon: <WbSunnyIcon />, label: 'Climate science center' },
        { icon: <PublicIcon />, label: 'Crises response' },
        { icon: <SportsEsportsIcon />, label: 'Fundraisers' },
        { icon: <BusinessCenterIcon />, label: 'Ads manager' },
        { icon: <AnnouncementIcon />, label: 'News' },
        { icon: <ReceiptIcon />, label: 'Orders and payments' },
        { icon: <PeopleIcon />, label: 'Pages' },
        { icon: <PersonAddIcon />, label: 'Ray-Ban Meta' },
        { icon: <PlayArrowIcon />, label: 'Recent ad activity' },
        { icon: <ExploreIcon />, label: 'Video' },
    ];

    const visibleCategories = showFullList ? categories : categories.slice(0, 6);

    return (
        <div className={styles.left_sidebar}>
            <ul className={styles.sidebarList}>
                <li className={styles.sidebarAvatar}>
                    <Avatar className={styles.sidebarIcon} />Username
                </li>
            </ul>

            <ul className={styles.sidebarList}>
                {visibleCategories.map((category, index) => (
                    <li key={index} className={styles.sidebarLink}>
                        {category.icon} {category.label}
                    </li>
                ))}
            </ul>

            <div
                className={styles.sidebarLink}
                onClick={() => setShowFullList(!showFullList)}
            >
                {showFullList ? (
                    <>
                        <KeyboardArrowUpIcon />See less 
                    </>
                ) : (
                    <>
                        <KeyboardArrowDownIcon />See more 
                    </>
                )}
            </div>
            <hr className={styles.divider} />
            <div className={styles.sidebarLink}>Your shortcuts</div>
            <div className={styles.sidebarFooter}>
                Privacy Terms Advertising Ad choices Cookies More Fakebook © 2023
            </div>
        </div>
    );
};

export default LeftSidebar;
