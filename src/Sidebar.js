import React from 'react';
import Channel from './Channel';
import "./Sidebar.css";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <h5>FOLLOWED CHANNELS</h5>
                <Channel avatar='https://image.shutterstock.com/image-photo/paris-france-18-january-2015-260nw-244924321.jpg'
                    name='cleverprogrammer'
                    followers='816K' />
                <Channel avatar='https://pbs.twimg.com/profile_images/1230201359280021511/d6sVhYpD.jpg'
                    name='soundit'
                    followers='162M' />
                <h5>RECOMMENDED CHANNELS</h5>
                <p className="sidebar__topShowMore">Show More</p>

                <div className="sidebar__bottom">
                    <div className="sidebar__bottomContainer">
                        <i className="fas fa search"></i>
                        <input type="text" placeholder="Search to Add Friends"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
