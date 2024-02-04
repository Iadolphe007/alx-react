import React from "react";
import './Notification.css';

export default function({type, html, value}) {
    return (
        <>
            <li data-notification-type={type}>{value}</li>
            <li dangerouslySetInnerHTML={{__html: html}}>{value}</li>
        </>
    );
}