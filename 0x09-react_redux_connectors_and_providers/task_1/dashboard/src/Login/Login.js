import React, {useState, useEffect} from "react";
import { StyleSheet, css } from 'aphrodite';

 function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [enableSubmit, setEnableSubmit] = useState(false);

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        Login(email, password);
    }
    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }
    useEffect(() => {
        if (email !== "" && password !== "") {
          setEnableSubmit(true);
        } else {
          if (enableSubmit !== false) {
            setEnableSubmit(false);
          }
        }
      }, [email, password]);
    
    return(
        <React.Fragment>
            <div className="App-body" style={css(styles.appBody)}>
                <p>Login to access the full dashboard</p>
                <form style={css(styles.margin)} onSubmit={handleLoginSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" className={css(styles.margin)} onChange={handleChangeEmail}></input>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" className={css(styles.margin)} onChange={handleChangePassword}></input>
                    <input type="submit" value="OK" disabled={!enableSubmit}/>
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
        "@media (max-width: 900px)": {
            display: "flex",
            flexDirection: "column",
          },
    }
});
export default Login;