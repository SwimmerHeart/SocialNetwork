import React from 'react';
import s from './Posts.module.css'
import Post from './post/Post';

let posts = [
    { message: 'Привет, как дела?', likesCount: "23" },
    { message: 'Это мой первый пост', likesCount: "5" }
];

let postsElement = posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

const Posts = (props) => {
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
                {postsElement}
            </div>
        </div>
    )
}

export default Posts;