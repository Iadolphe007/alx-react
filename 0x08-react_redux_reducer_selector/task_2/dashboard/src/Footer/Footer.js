import React, { useContext } from "react";
import "./Footer.css";
import { getFullYear, getFooterCopy } from "../utils/utils";
import { AppContext } from "../App/AppContext";


export default function Footer() {
  const {user} = useContext(AppContext);
    return(
        <>
          <div className="App-footer">
            {user.isLoggedIn && (
              <p><a href="/contact">Contact us</a></p>
            )}
            Copyright {getFullYear()} - {getFooterCopy()}
          </div>
        </>
    );
}
