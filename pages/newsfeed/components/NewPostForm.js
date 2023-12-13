// NewPostForm.js

import React, { useState } from 'react';
import styles from '../../../styles/Newsfeed.module.css';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import FilterIcon from '@mui/icons-material/Filter';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import NewPost from './NewPost'; // Import the new post component

export default function NewPostForm() {
  const [isCreatingPost, setCreatingPost] = useState(false);

  const startCreatingPost = () => {
    setCreatingPost(true);
  };

  const cancelCreatingPost = () => {
    setCreatingPost(false);
  };

  return (
    <div className={styles.newPost}>
      <div className={styles.newPostTop} onClick={startCreatingPost}>
        <div className={styles.avatar}></div>
        <div className={styles.newPostCreatePost}>
          What's on your mind, User?
        </div>
      </div>
      <hr className={styles.divider} />
      <div className={styles.newPostBottom}>
        <div className={styles.newPostAddOns}>
          {/* ... (Your existing icons and functionalities) */}
        </div>
      </div>

      {isCreatingPost && (
        <NewPost onCancel={cancelCreatingPost} />
      )}
    </div>
  );
}
