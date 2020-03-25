import React from 'react';
import s from './Profile.module.css'
import Posts from './posts/Posts';
import ProfileInfo from './profileInfo/ProfileInfo';

// let posts = [
//     { message: 'Привет, как дела?', likesCount: "23" },
//     { message: 'Это мой первый пост', likesCount: "5" }
// ];

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <Posts posts={props.profilePage.posts}
                addPost={props.addPost}
                newPostText={props.profilePage.newPostText}
                updateNewPostText={props.updateNewPostText} />
        </div>
    )
}

export default Profile; 