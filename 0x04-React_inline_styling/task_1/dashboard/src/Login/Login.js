import React from "react";
import { StyleSheet, css } from 'aphrodite';


export default function Login() {
    return(
        <React.Fragment>
            <div className="App-body" style={css(styles.appBody)}>
                <p>Login to access the full dashboard</p>
                <form style={css(styles.margin)}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" style={css(styles.margin)}></input>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" style={css(styles.margin)}></input>
                    <button>OK</button>
                </form>
            </div>
    </React.Fragment>
    ); 
}

const styles = StyleSheet.create({
    margin: {
        margin: "10px",
    },

    appBody: {
        fontSize: "1rem",
        padding: "2em",
        borderBottom: "3px solid #e0354b",
        height: "45%",
    }
});
