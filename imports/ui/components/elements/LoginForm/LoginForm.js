import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <div className="login-form">
                    <img className="logo" src="./assets/img/SVG/logo.svg" alt="logodchat" />
                    <form method="POST">
                        <label htmlFor="username">Your ID</label>
                        <input className="text-box" type="text" name="userID" autoFocus autoComplete="false" pattern="[A-Za-z]{8,30}" />
                        <label htmlFor="psw">Password</label>
                        <input className="text-box" type="password" name="psw" maxLength={20} minLength={8} autoComplete="off" />
                        <Link to={`/notification`}><input className="btn btn--large btn--blue" type="submit" defaultValue="login" /></Link>
                        <div className="login--option">
                            <a href="#" className="login__link">Forgot password?</a>
                            <Link to={`/signup`}><input className="btn btn--medium-2 btn--pink" type="button" defaultValue="create" /></Link>
                        </div>
                    </form>
                </div>

            </React.Fragment>
        );
    }
}

export default LoginForm;