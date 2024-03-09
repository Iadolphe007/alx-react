export const filterTypeSelected = state => state.filter;

export default function getNotificationsSelector(state) {
    const notificationsMap = new Map();
    state.notificationItem.forEach(notificationItem => {
      notificationsMap.set(notificationItem.id, notificationItem);
    });
    return notificationsMap;
}

// Define a selector to get the notifications
const getNotifications = state => state.notifications;

// Selector to return unread notifications as a Map
export const getUnreadNotifications = createSelector(
  getNotifications,
  notifications => {
    // Filter unread notifications
    const unreadNotifications = notifications.filter(notification => !notification.isRead);
    
    // Convert the filtered notifications array to a Map format
    const unreadNotificationsMap = new Map();
    unreadNotifications.forEach(notification => {
      unreadNotificationsMap.set(notification.id, notification);
    });
    
    return unreadNotificationsMap;
  }
);