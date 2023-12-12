import React from 'react';
import styles from '../../styles/Newsfeed.module.css'
import Article from './components/articles';
import LeftSidebar from './components/left_sidebar';
import Feed from './components/feed';

export default function Newsfeed() {
    return (
      <div className={styles.newsfeed_container}>
<LeftSidebar />
<Feed />
        <div className={styles.right_sidebar}>
          Ads<br />
          Contacts<br />
        </div>
      </div>
    );
}