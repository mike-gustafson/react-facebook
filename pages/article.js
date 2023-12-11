import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Newsfeed.module.css';

const Article = ({ title, body, idx }) => {
    return (
        <div className={styles.post} key={idx}>
            <div className={styles.post_header}>
                <div>
                    <p className={styles.post_author}>John Doe</p>
                    <p className={styles.timestamp}>{new Date().toLocaleString()}</p>
                </div>
            </div>
            <div className={styles.post_content}>
                <h3>{title}</h3>
                <p>{body}</p>
            </div>
            <div className={styles.post_actions}>
                <div>
                    <span className={styles.icon}>👍</span>
                    {Math.floor(Math.random() * 100)} Likes
                </div>
                <div>
                    <span className={styles.icon}>💬</span>
                    {Math.floor(Math.random() * 50)} Comments
                </div>
                <div>
                    <span className={styles.icon}>↩️</span>
                    {Math.floor(Math.random() * 20)} Shares
                </div>
            </div>
        </div>
    );
};


export default Article;
