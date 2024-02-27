import React, {createContext, useState} from "react";

export const user = {
    email: "",
    password: "",
    isLoggedIn: ""
};

export  const logOut = () => {
    user.isLoggedIn = false;
}

export default AppContext = createContext({
    email,
    password,
});