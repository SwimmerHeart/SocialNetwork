import React from 'react';
import s from './Posts.module.css'
import Post from './post/Post';

const Posts = () => {
    return (
        <div>
            My posts
            <textarea></textarea>
            <button>add post</button>

            <div>
                New post
            </div>
            <div className={s.posts}>
                <Post message="Привет, как дела?" likesCount="23" />
                <Post message="Это мой первый пост" likesCount="5" />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default Posts;