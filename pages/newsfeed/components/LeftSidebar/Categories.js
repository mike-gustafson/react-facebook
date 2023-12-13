import React, { useState } from 'react';

// styles
import style from '../../../../styles/Newsfeed.module.css';

// icons from https://mui.com/components/material-icons/
import GroupIcon from '@mui/icons-material/Group';
import GamesIcon from '@mui/icons-material/Games';
import EventIcon from '@mui/icons-material/Event';
import PublicIcon from '@mui/icons-material/Public';
import PeopleIcon from '@mui/icons-material/People';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ExploreIcon from '@mui/icons-material/Explore';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// Categories component - renders the list of categories for the left sidebar
export default function Categories() {

    // State to toggle the full list of categories
    const [showFullList, setShowFullList] = useState(false);

    // List of categories
    const categories = [
        { icon: <BusinessCenterIcon  className={style.sidebarIcon}/>, label: 'Ads manager' },
        { icon: <LocalHospitalIcon  className={style.sidebarIcon}/>, label: 'Blood donations' },
        { icon: <WbSunnyIcon  className={style.sidebarIcon}/>, label: 'Climate science center' },
        { icon: <PublicIcon  className={style.sidebarIcon}/>, label: 'Crises response' },
        { icon: <EventIcon  className={style.sidebarIcon}/>, label: 'Events' },
        { icon: <LibraryBooksIcon  className={style.sidebarIcon}/>, label: 'Feeds' },
        { icon: <SportsEsportsIcon  className={style.sidebarIcon}/>, label: 'Fundraisers' },
        { icon: <VideoLibraryIcon  className={style.sidebarIcon}/>, label: 'Gaming video' },
        { icon: <GroupIcon  className={style.sidebarIcon}/>, label: 'Groups' },
        { icon: <AnnouncementIcon  className={style.sidebarIcon}/>, label: 'News' },
        { icon: <ReceiptIcon  className={style.sidebarIcon}/>, label: 'Orders and payments' },
        { icon: <PeopleIcon  className={style.sidebarIcon}/>, label: 'Pages' },
        { icon: <GamesIcon  className={style.sidebarIcon}/>, label: 'Play games' },
        { icon: <PersonAddIcon  className={style.sidebarIcon}/>, label: 'Ray-Ban Meta' },
        { icon: <PlayArrowIcon  className={style.sidebarIcon}/>, label: 'Recent ad activity' },
        { icon: <BookmarkIcon  className={style.sidebarIcon}/>, label: 'Saved' },
        { icon: <ExploreIcon  className={style.sidebarIcon}/>, label: 'Video' },
    ];

    // Show only 6 categories
    const visibleCategories = showFullList ? categories : categories.slice(0, 6);

    // Render the categories
    return (
        <div>
            <ul className={style.sidebarList}>
                {visibleCategories.map((category, index) => (
                    <li key={index} className={style.sidebarLink}>
                        {category.icon} {category.label}
                    </li>
                ))}
            </ul>

            <div className={style.sidebarLink} onClick={() => setShowFullList(!showFullList)}>
                {showFullList ? (
                    <>
                        <KeyboardArrowUpIcon  className={style.sidebarIcon}/>See less
                    </>
                ) : (
                    <>
                        <KeyboardArrowDownIcon  className={style.sidebarIcon}/>See more
                    </>
                )}
            </div>

            {/* add a divider below the categories */}
            <hr className={style.divider} />
        </div>
    )
}