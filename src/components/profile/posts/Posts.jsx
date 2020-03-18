import React from 'react';
import s from './Posts.module.css'
import Post from './post/Post';

let postsData = [
    { message: 'Привет, как дела?', likesCount="23" },
    { message: 'Это мой первый пост', likesCount="5" }
];

const Posts = () => {
    return (
        <div>
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>add post</button>
                </div>
            </div>
            <div>
                New post
            </div>
            <div className={s.posts}>
                <Post message={postsData[0].message} likesCount={postsData[0].likesCount} />
                <Post message={postsData[1].message} likesCount={postsData[1].likesCount} />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default Posts;