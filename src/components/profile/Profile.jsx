import React from 'react';
import s from './Profile.module.css'
import Posts from './posts/Posts';

const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://startupanz.com/wp-content/uploads/2019/07/maxresdefault-1.jpg" />
            </div>
            <div>
                ava+description
            </div>
            <Posts />
        </div>
    )
}

export default Profile;