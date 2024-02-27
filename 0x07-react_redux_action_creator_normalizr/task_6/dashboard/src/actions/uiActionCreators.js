import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes";

export default function login(email, password) {
    return {
        type: LOGIN,
    }
}

export const boundLogin = (email, password) => (dispatch(login(email. password)))

export default function logout() {
    return {
        type: LOGOUT,
        user: { email, password },
    }
}

export const boundLogout = () => (dispatch(logout()))

export default function displayNotificationDrawer() {
    return {
        type: DISPLAY_NOTIFICATION_DRAWER,
    }
}

export const boundisplayNotificationDrawer = () => (dispatch(displayNotificationDrawer()))

export default function hideNotificationDrawer() {
    return {
        type: HIDE_NOTIFICATION_DRAWER,
    }
}
export const boundHideNotificationDrawer = () => dispatch(hideNotificationDrawer());
