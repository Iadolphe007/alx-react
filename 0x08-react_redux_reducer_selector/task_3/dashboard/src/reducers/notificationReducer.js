import {
    FETCH_NOTIFICATIONS_SUCCESS,
    MARK_AS_READ,
    SET_TYPE_FILTER,
  } from '../actions/notificationActionTypes';
  
  export const initialNotificationState = {
    notifications: [],
    filter: 'DEFAULT',
  };

  