import React from 'react';
import './Notification.css';
import NotificationItem from './NotificationItem';

export default function Notifications() {
    return (
        <div className='Notifications'>
            <button style={{position: "absolute"}} aria-label="Close" onlick={console.log("Close button has been clicked")}>
                <img src="close-icon.png" alt="" />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <NotificationItem type="default" value="New course available" />
                <NotificationItem type="urgent" value="New resume available" />
                <NotificationItem type="urgent" html={getLatestNotification()} />
            </ul>
        </div>
    );
}
