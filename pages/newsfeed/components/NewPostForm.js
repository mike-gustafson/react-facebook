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
          <div className={styles.newPostLiveVideo}>
            <VideoCameraFrontIcon className={styles.newPostLiveVideoIcon} />
            <div className={styles.newPostLiveVideoText}>Live Video</div>
          </div>
          <div className={styles.newPostPhotoVideo}>
            <FilterIcon className={styles.newPostPhotoVideoIcon} />
            <div className={styles.newPostPhotoVideoText}>Photo/Video</div>
          </div>
          <div className={styles.newPostFeelingActivity}>
            <SentimentVerySatisfiedIcon className={styles.newPostFeelingActivityIcon} />
            <div className={styles.newPostFeelingActivityText}>Feeling/Activity</div>
          </div>
        </div>
      </div>

      {isCreatingPost && (
        <NewPost onCancel={cancelCreatingPost} />
      )}
    </div>
  );
}
