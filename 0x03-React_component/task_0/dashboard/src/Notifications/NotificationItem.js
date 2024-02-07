import React from "react";
import './Notification.css';
import PropTypes from "prop-types";

export default function NotificationItem({type, html, value}) {
    return (
        <>
            <li data-notification-type={type}>{value}</li>
            <li dangerouslySetInnerHTML={{__html: html}}>{value}</li>
        </>
    );
}

NotificationItem.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    __html: PropTypes.shape({
      html: PropTypes.string,
    }),
};
  
NotificationItem.defaultProps = {
    type: "default",
};