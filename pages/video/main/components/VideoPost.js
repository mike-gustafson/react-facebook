// VideoPost.js
import React from 'react';
import YouTube from 'react-youtube';
import PropTypes from 'prop-types';
import style from '../../../../styles/Video.module.css';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ForwardOutlinedIcon from '@mui/icons-material/ForwardOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';

const VideoPost = ({ title, description, timestamp, author, likes, comments, shares, videoUrl }) => {
    
    const videoId = videoUrl.split('v=')[1];
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 0,
        },
    };

    return (
        <div className={style.Post}>
            <div className={style.Header}>
                <img
                    src={`https://picsum.photos/536/354`}
                    alt="Author"
                    className={style.Avatar}
                />
                <div>
                    <p className={style.Name}>John Doe - <span className={style.Follow}>Follow</span></p>
                    <p className={style.Timestamp}>{new Date().toLocaleDateString()}</p>
                </div>
            </div>
            <div className={style.Content}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className={style.VideoContainer}>
                <YouTube videoId={videoId} opts={opts} />
            </div>
            <div className={style.Footer}>
                <div className={style.Actions}>
                    <div className={style.Action}>
                        <ThumbUpOffAltIcon  className={style.Icon}/>Like
                    </div>
                    <div className={style.Action}>
                        <ChatBubbleOutlineIcon  className={style.Icon}/>Comment
                    </div>
                    <div className={style.Action}>
                        <ForwardOutlinedIcon  className={style.Icon}/>Share
                    </div>
                </div>
                <div className={style.ActionCounts}>
                    <div className={style.Likes}><ThumbUpAltIcon className={style.LikesIcon} /><FavoriteIcon className={style.HeartsIcon} />{likes}</div>
                    <div className={style.Space}>&nbsp;·&nbsp;</div>
                    <div className={style.Comments}>{comments} comments</div>
                    <div className={style.Space}>&nbsp;·&nbsp;</div>
                    <div className={style.Shares}>{shares} shares</div>
                </div>
            </div>
        </div>
    );
};

VideoPost.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    shares: PropTypes.number.isRequired,
    videoUrl: PropTypes.string.isRequired,
};

export default VideoPost;


