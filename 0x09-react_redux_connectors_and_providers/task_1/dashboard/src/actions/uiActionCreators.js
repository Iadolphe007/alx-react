import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from "./uiActionTypes";
import fetch from "node-fetch";

export default function login(email, password) {
    return {
        type: LOGIN,
    }
}

export const boundLogin = (email, password) => (dispatch(login(email, password)))

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


export default function loginSucess() {
    return {
        type: LOGIN_SUCCESS,
    }
}

export default function loginFailure() {
    return {
        type: LOGIN_FAILURE,
    }
}

export function loginRequest(email, password) {
    return async (dispatch) => {
      boundLogin(email, password);
  
      try {
            const res = await fetch("http://localhost:0000/login-success.json");
            const json = await res.json();
            return dispatch(loginSucess());
        } catch (error) {
            return dispatch(loginFailure());
        }
    };
}