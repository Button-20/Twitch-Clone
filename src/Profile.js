import React from 'react'
import './Profile.css'
import RecentItems from './RecentItems'

const Profile = () => {
    return (
        <div className="profile">
            <div className="profile__topLeft">
                <img src="https://pbs.twimg.com/profile_images/1230201359280021511/d6sVhYpD.jpg"/>
                
                <div className="profile__topLeftDetails">
                    <h1>sounditgh</h1>
                    <h3>162M followers</h3>
                </div>
            </div>
            <div className="profile__topRight">
                <i className="fas fa-heart graybg"></i>
                <i className="fas fa-bell graybg"></i>
                <i className="fas fa-ellipsis-v"></i>
            </div>
            <div className="profile__menu">
                <h2 className="active">Home</h2>
                <h2>About</h2>
                <h2>Schedule</h2>
                <h2>Videos</h2>
                <h2><i class="fas fa-arrow-up"></i></h2>
                <h2>Chat</h2>
            </div>

            <div className="profile__recent">
                <h2>Recent broadcasts</h2>
                <div className="profile__recentItems">
                    <RecentItems url={'https://www.youtube.com/embed/ktjafK4SgWM'}
                    title={'Learn the MERN Stack- Full Tutorialfor Beginners (MongoDB, ExpressJS, ReactJS, NodeJS)'}
                    />

                    <RecentItems url={'https://www.youtube.com/embed/39GRFGm2JRY'}
                    title={'Learn JavaScript in just 10 Minutes (2021)'}
                    />

                    <RecentItems url={'https://www.youtube.com/embed/vIRBSI-elUM'}
                    title={'Learn REACT JS in just 30 MINUTES (2021)'}
                    />
                    
                    <RecentItems url={'https://www.youtube.com/embed/Jf6TRq5iqh8'}
                    title={'5 Ways to Make Money as a Developer'}
                    />
                </div>

                <div className="profiles__categories">
                    <h2>sounditgh's recently streamed Categories</h2>
                    <img src="https://static-cdn.jtvnw.net/ttv-boxart/Science%20&%20Technology-280x380.jpg"/>
                    <h3>Science & Technology</h3>
                </div>
            </div>
        </div>
    )
}

export default Profile
