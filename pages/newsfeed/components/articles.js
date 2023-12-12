import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../../styles/Newsfeed.module.css';

const Article = ({ title, body, idx }) => {
    return (
        <div className={styles.post} key={idx}>
            <div className={styles.post_header}>
                <div className={styles.post_author_info}>
                    <img
                        src={`https://placekitten.com/50/50?random=${idx}`}
                        alt="Author"
                        className={styles.post_author_image}
                    />
                    <div>
            rtyeu            <p className={styles.post_author_name}>John Doe</p>
                        <p className={styles.post_timestamp}>{new Date().toLocaleString()}</p>
                    </div>
                </div>
            </div>
            <div className={styles.post_content}>
                <h3>{title}</h3>
                <p>{body}</p>
            </div>
            <div className={styles.post_actions}>
                <div className={styles.post_action}>
                    <span className={styles.post_icon}>👍</span>
                    {Math.floor(Math.random() * 100)} Likes
                </div>
                <div className={styles.post_action}>
                    <span className={styles.post_icon}>💬</span>
                    {Math.floor(Math.random() * 50)} Comments
                </div>
                <div className={styles.post_action}>
                    <span className={styles.post_icon}>↩️</span>
                    {Math.floor(Math.random() * 20)} Shares
                </div>
            </div>
        </div>
    );
};




export default Article;
