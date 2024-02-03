import React from 'react';
import './Notification.css';

export default function Notifications() {
    return (
        <div className='Notifications'>
            <button style={{position: "absolute"}} aria-label="Close" onlick={console.log("Close button has been clicked")}>
                <img src="close-icon.png" alt="" />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data="default">New course available</li>
                <li data="urgent">New resume available</li>
                <li data="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
            </ul>
        </div>
    );
}