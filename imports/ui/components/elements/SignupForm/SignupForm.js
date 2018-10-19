import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <div className="login-form">
                    <img className="logo" src="./assets/img/SVG/logo.svg" alt="logodchat" />
                    <form method="POST">
                        <label htmlFor="username">Your ID</label>
                        <input className="text-box" type="text" name="userID" required autoFocus autoComplete="off" pattern="[A-Za-z]{8,30}" />
                        <label htmlFor="psw">Display name</label>
                        <input className="text-box" type="text" name="username" maxLength={30} minLength={8} required autoComplete="off" />
                        <label htmlFor="psw">Password</label>
                        <input className="text-box" type="password" name="psw" maxLength={20} minLength={8} required autoComplete="off" />
                        <label htmlFor="psw">Your email</label>
                        <input className="text-box" type="email" name="email" required autoComplete="off" />
                        <label htmlFor="color">Choose your color</label>
                        <select id="sel" name="color">
                            <option value="blue" className="bgr-blue">Blue</option>
                            <option value="red" className="bgr-red">Red</option>
                            <option value="pink" className="bgr-pink">Pink</option>
                            <option value="yellow" className="bgr-yellow">Yellow</option>
                            <option value="orange" className="bgr-orange">Orange</option>
                            <option value="cyan" className="bgr-cyan">Cyan</option>
                            <option value="green" className="bgr-green">Green</option>
                        </select>
                        <input className="btn btn--large btn--green" type="submit" defaultValue="sign up" />
                        <div className="login--option">
                            <Link to={`/`} className="login__link">Back</Link>
                        </div>
                    </form>
                </div>

            </React.Fragment>
        );
    }
}

export default SignupForm;