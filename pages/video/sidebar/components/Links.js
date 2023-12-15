import React from 'react';
import style from '../../../../styles/Video.module.css';

import LiveTvIcon from '@mui/icons-material/LiveTv';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import VideoChatIcon from '@mui/icons-material/VideoChat';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';

const icon = style.Icon;
const linksData = [
  { icon: <OndemandVideoIcon fontSize="large" />, name: 'Home', className: icon },
  { icon: <VideoCameraFrontIcon fontSize="large" />, name: 'Live', className: icon },
  { icon: <VideoChatIcon fontSize="large" />, name: 'Reels', className: icon },
  { icon: <LiveTvIcon fontSize="large" />, name: 'Shows', className: icon },
  { icon: <RocketLaunchIcon fontSize="large" />, name: 'Explore', className: icon },
  { icon: <BookmarkIcon fontSize="large" />, name: 'Saved Videos', className: icon },
];

export default function SidebarLinks() {
  return (
    <div className={style.LinksContainer}>
      {linksData.map((link, index) => (
        <div key={index} className={style.Link}>
          {React.cloneElement(link.icon, { className: link.className })} {link.name}
        </div>
      ))}
    </div>
  );
}
