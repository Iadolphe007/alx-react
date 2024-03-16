import React, { useContext } from "react";
import "./Footer.css";
import { getFullYear, getFooterCopy } from "../utils/utils";
// import { AppContext, user } from "../App/AppContext";
import PropTypes from "prop-types";
import {configureStore} from '@reduxjs/toolkit';
import { connect } from "react-redux";


export function Footer({ user }) {
  return (
    <div className="footer">
      <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </p>
      {user && <a href="#">Contact us</a>}
    </div>
  );
}

Footer.defaultProps = {
  user: null,
};

Footer.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps, null)(Footer);