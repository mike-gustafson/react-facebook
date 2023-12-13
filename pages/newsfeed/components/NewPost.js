// NewPost.js

import React, { useState, useEffect } from 'react';
import styles from '../../../styles/Newsfeed.module.css';

export default function NewPost({ onCancel }) {
  const [postContent, setPostContent] = useState('');

  useEffect(() => {
    // Disable scrolling when the component mounts
    document.body.style.overflow = 'hidden';

    // Enable scrolling when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleInputChange = (e) => {
    setPostContent(e.target.value);
  };

  const handlePostSubmit = () => {
    // Add logic to handle submitting the post content (e.g., send to server)
    console.log('Posting:', postContent);

    // Reset the post content and close the NewPost component
    setPostContent('');
    onCancel();
  };

  return (
    <div className={styles.newPostOverlay}>
      <div className={styles.newPostContainer}>
        <div className={styles.newPostBody}>
          <div className={styles.newPostTop}>
            <div className={styles.avatar}></div>
            <textarea
              placeholder="What's on your mind?"
              value={postContent}
              onChange={handleInputChange}
              className={styles.newPostTextarea}
            />
          </div>
          <hr className={styles.divider} />
          <div className={styles.newPostBottom}>
            <button className={styles.postButton} onClick={handlePostSubmit}>
              Post
            </button>
            <button className={styles.cancelButton} onClick={onCancel}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
