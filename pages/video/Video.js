import React, { useState } from 'react';
import Main from './main/Main';
import Sidebar from './sidebar/Sidebar';
import style from '../../styles/Video.module.css';
import styleSidebar from '../../styles/Sidebar.module.css';

export default function Video() {
    const [selectedLink, setSelectedLink] = useState('Home');

    const handleLinkClick = (link) => {
        setSelectedLink(link);
    };

    return (
        <div className={style.Container}>
            <div className={style.Sidebar}>
                <Sidebar onLinkClick={handleLinkClick} />
            </div>
            <div className={style.Main}>
                <Main selectedLink={selectedLink} />
            </div>
        </div>
    );
}