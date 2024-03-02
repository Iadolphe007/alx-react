import {
    FETCH_NOTIFICATIONS_SUCCESS,
    MARK_AS_READ,
    SET_TYPE_FILTER,
  } from '../actions/notificationActionTypes';
  
  export const initialNotificationState = {
    notifications: [],
    filter: 'DEFAULT',
  };

  const notifiticationsReducer = (state = initialNotificationState, action) => {
    switch(action.type) {
      case FETCH_NOTIFICATIONS_SUCCESS:
        const updatedNotification = action.data.map(Notification => ({
            ...Notification,
            isRead: false,
        }));
        return {
          ...state,
          notifications: updatedNotification,
        }
      case MARK_AS_READ:
        const updatedNotificationList = state.notifications.map(Notification => {
          if (Notification.id === action.id){
            return{
              ...Notification,
              isRead: true,
            }
          }
          return Notification
        });
        return {
          ...state,
          notifications: updatedNotification
        }
      case SET_TYPE_FILTER:
        return {
          ...state,
          filter: action.filter,
        }
      default:
        break;
    }
    return state;
  }

  export default notifiticationsReducer