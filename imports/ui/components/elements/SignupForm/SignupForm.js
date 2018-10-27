import React, { Component } from 'react';
import { Link, Redirect,  withRouter } from 'react-router-dom';
import LoginContainer from '../../../containers/LoginContainer/LoginContainer';
import Chatkit from '@pusher/chatkit-server';
import {chatkit} from '../../../../api/chatkit/clientobj';
import { Accounts } from 'meteor/accounts-base';
class SignupForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            error: ''
        }
    }

    handleSubmit = (e) => {

        e.preventDefault();
        let email = this.refs.email.value.trim(); 
        let password = this.refs.psw.value.trim();
        let id = this.refs.userID.value.trim();
        let name = this.refs.username.value.trim();
        let color = this.refs.color.value.trim();

        Accounts.createUser({
            email,
            password,
            username: id,
            profile: { 
                name,
                color
            }},(err) => {
                this.setState({
                    error: err
                })
          });

        chatkit.createUser({
            id: id,
            name: name,
            email:email,
            password:password,
            customData: {
              avatarColor: color,
              role:"ctv"
            },
          })
          .then(() => {
            alert("Successfully");
            this.refs.signUpForm.reset()
            this.props.history.push('/admin')
          }).catch((err) => {
            alert("Fail! "+err.error_description)
            console.log(err);
          });

  }

    render() {
        console.log(chatkit.getUsers())
        return (
            <LoginContainer>
                <div className="login-form">
                    <img className="logo" src="./assets/img/SVG/logo.svg" alt="logodchat" />
                    <form method="POST" onSubmit={this.handleSubmit} ref="signUpForm">
                        <label htmlFor="userID">Your ID</label>
                        <input className="text-box" type="text" name="userID" ref="userID" required autoFocus autoComplete="off"  />
                        <label htmlFor="username">Display name</label>
                        <input className="text-box" type="text" name="username" ref="username" maxLength={30} minLength={8} required autoComplete="off" />
                        <label htmlFor="psw">Password</label>
                        <input className="text-box" type="password" name="psw" ref="psw" maxLength={20} minLength={8} required autoComplete="off" />
                        <label htmlFor="email">Your email</label>
                        <input className="text-box" type="email" name="email" ref="email" required autoComplete="off" />
                        <label htmlFor="color">Choose your color</label>
                        <select id="sel" name="color" ref="color">
                            <option value="blue" className="bgr-blue">Blue</option>
                            <option value="red" className="bgr-red">Red</option>
                            <option value="pink" className="bgr-pink">Pink</option>
                            <option value="yellow" className="bgr-yellow">Yellow</option>
                            <option value="orange" className="bgr-orange">Orange</option>
                            <option value="cyan" className="bgr-cyan">Cyan</option>
                            <option value="green" className="bgr-green">Green</option>
                        </select>
                        <button className="btn btn--large btn--green" type="submit"> SIGN UP </button>
                        <div className="login--option">
                            <Link to={`/admin`} className="login__link">Back</Link>
                            {/* <div ref="log">{this.state.error !== '' ? this.state.error : ''}</div> */}
                        </div>
                    </form>
                </div>

            </LoginContainer>
        );
    }
}

export default withRouter(SignupForm);