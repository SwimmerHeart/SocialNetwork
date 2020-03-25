import React from 'react';
import s from './Posts.module.css'
import Post from './post/Post';


const Posts = (props) => {
    console.log(props);

    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);
    let newPostElement = React.createRef();
    let addPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div>
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={addPost}>add post</button>
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