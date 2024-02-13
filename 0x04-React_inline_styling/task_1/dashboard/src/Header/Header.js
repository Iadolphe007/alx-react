import React from "react";
import logo from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from 'aphrodite';

function Header() {
  return (
    <>
      <div className="App-header" style={css(styles.header)}>
        <img src={logo} className="App-logo" style={css(styles.headerImg)} alt="logo"/>
        <h1>School dashboard</h1>
      </div>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: "1.4rem",
    color: "#e0354b",
    display: "flex",
    alignItems: "center",
    borderBottom: "3px solid #e0354b",
    paddingTop: "200px",
  },

  headerImg: {
    width: "200px",
    height: "200px",
  },
});

export default Header;
