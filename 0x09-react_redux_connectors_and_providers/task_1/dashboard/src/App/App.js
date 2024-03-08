import React from "react";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import PropTypes from "prop-types";
import { getLatestNotification } from "../utils/utils";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
import { StyleSheet, css } from 'aphrodite';
import { AppContext, user } from "./AppContext";
import {connect} from 'readux';
import {displayNotificationDrawer, hideNotificationDrawer} from "../actions/uiActionCreators";

const  listCourses = [
  {id: 1, name: 'ES6', credit: 60},
  {id: 2, name: 'Webpack', credit: 20},
  {id: 3, name: 'React', credit: 40}];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.state = {
      displayDrawer: false,
      user: user,
      logOut: this.logOut,
      listNotifications,
    };
    // this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    // this.handleHideDrawer = this.handleHideDrawer.bind(this);
    // this.logIn = this.logIn.bind(this);
    // this.logOut = this.logOut.bind(this);
    // this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
  }

  // handleDisplayDrawer() {
  //   this.setState({displayDrawer: true});
  // }

  // handleHideDrawer() {
  //   this.setState({displayDrawer: false});
  // }
  handleKeyDown(event) {
    if(event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logout();
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown)
  }

  logIn(email, password) {
    this.setState({
      user: {
        email: "",
        password: "",
        isLoggedIn: true,
      },
    });
  }

  logout() {
    this.setState({
      user: user,
    });
  }

  markNotificationAsRead(id) {
    const newList = this.state.listNotifications.filter((notification) => notification.id !== id);
    this.setState({ listNotifications: newList });
  }
 
  render() {
    return (
      <AppContext.Provider
      value={{
        user: this.state.user,
        logout: this.state.logOut,
      }}
      >
        <React.Fragment>
        <div className={css(styles.App)}>
          <div className="heading-section">
            <Notifications
              markNotificationAsRead={this.markNotificationAsRead}
              listNotifications={this.listNotifications}
              displayDrawer={this.state.displayDrawer}
              handleDisplayDrawer={this.handleDisplayDrawer}
              handleHideDrawer={this.handleHideDrawer}
            />
            <Header />
          </div>
          {this.state.user.isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={this.listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login logIn={this.logIn}/>
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the school">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis at 
              tempora odio, necessitatibus repudiandae reiciendis cum nemo.
            </p>
          </BodySection>
          <Footer />
        </div>
      </React.Fragment>
      </AppContext.Provider>
    );
  }
}
      

const styles = StyleSheet.create({
  App: {
    height: "100vh",
    maxWidth: "100vw",
    position: "relative",
    fontFamily: "Arial, Helvetica, sans-serif",
  }
});

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
  displayNotificationDrawer: () => {},
  hideNotificationDrawer: () => {},
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func,
  hideNotificationDrawer: PropTypes.func,
};


export const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.get('isLoggedIn'),
    displayDrawer: state.get('isNotificationDrawerVisible'),
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    displayNotificationDrawer: () => dispatch(displayNotificationDrawer()),
    hideNotificationDrawer: () => dispatch(hideNotificationDrawer()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
