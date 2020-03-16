import React from 'react';
import s from './Post.module.css'

const Post = (props) => {

    return (
        <div className={s.item}>
            <div>
                <img src="https://hornews.com/images/news_large/c1d4b2b8ec608ea72764c5678816d5c9.jpg" />
            </div>
            {props.message}
            <div>
                <span>Like</span> {props.likesCount}
            </div>
        </div>

    )
}

export default Post;