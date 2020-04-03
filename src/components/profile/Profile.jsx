import React from 'react';
import s from './Profile.module.css'
import Posts from './posts/Posts';
import ProfileInfo from './profileInfo/ProfileInfo';


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <Posts posts={props.profilePage.posts}
                dispatch={props.dispatch} />
        </div>
    )
}

export default Profile; 