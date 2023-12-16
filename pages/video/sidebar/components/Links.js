import React, { useState } from 'react';
import style from '../../../../styles/Sidebar.module.css';

import LiveTvIcon from '@mui/icons-material/LiveTv';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import VideoChatIcon from '@mui/icons-material/VideoChat';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';

const icon = style.Icon;
const linksData = [
  { icon: <OndemandVideoIcon fontSize="large" />, name: 'Home', className: icon, activeColor: '#216FDB' },
  { icon: <VideoCameraFrontIcon fontSize="large" />, name: 'Live', className: icon, activeColor: '#F3425F' },
  { icon: <VideoChatIcon fontSize="large" />, name: 'Reels', className: icon, activeColor: 'blue' },
  { icon: <LiveTvIcon fontSize="large" />, name: 'Shows', className: icon, activeColor: '#6BCEBB' },
  { icon: <RocketLaunchIcon fontSize="large" />, name: 'Explore', className: icon, activeColor: '#9360F7' },
  { icon: <BookmarkIcon fontSize="large" />, name: 'Saved Videos', className: icon, activeColor: '#F7B928' },
];

export default function SidebarLinks({ onLinkClick }) {
  const [activeLink, setActiveLink] = useState('Home');

  const handleLinkClick = (link) => {
    if (onLinkClick) {        
      onLinkClick(link);
    }
    setActiveLink(link);
  };

  return (
    <div className={style.Container}>
      {linksData.map((link, index) => (
        <div
          key={index}
          className={`${style.Link} ${activeLink === link.name ? style.LinkActive : ''}`}
          onClick={() => handleLinkClick(link.name)}
        >
          {React.cloneElement(link.icon, { className: link.className, style: { backgroundColor: activeLink === link.name ? link.activeColor : '' } })}
          {link.name}
        </div>
      ))}
    </div>
  );
}