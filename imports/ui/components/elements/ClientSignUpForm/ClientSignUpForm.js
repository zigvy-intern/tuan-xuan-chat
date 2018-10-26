import React, { Component } from 'react';

class ClientSignUpForm extends Component {
    state = {}
    render() {
        return (
        
        <div className="login-form client-signup" style={{ display: 'none' }}>
            <header className="client-signup__header bgr-pink">
                <p>Need help?</p>
                <div className="minimal-line" />
            </header>
            <form method="POST">
                <label htmlFor="email">Your email (*) </label>
                <input className="text-box" type="email" name="email" required autoComplete="off" />
                <label htmlFor="psw">Your name (*)</label>
                <input className="text-box" type="text" name="username" maxLength={30} minLength={8} required autoComplete="off" />
                <button className="btn btn--large btn--blue" type="submit">START CHAT</button>
            </form>
        </div>
        );
    }
}

export default ClientSignUpForm;