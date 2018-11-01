import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginContainer from '../../../containers/LoginContainer/LoginContainer';
import Chatkit from '@pusher/chatkit-server';
import {chatkit} from '../../../../api/chatkit/clientobj';
import { Accounts } from 'meteor/accounts-base';
import createHistory from 'history/createBrowserHistory';
import { Meteor } from 'meteor/meteor';

const history = createHistory();
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
        let confirmPassword = this.refs.cfpsw.value.trim();
        console.log('Password', password);
        console.log('Confirm', confirmPassword);
        let id = this.refs.userID.value.trim();
        let name = this.refs.username.value.trim();
        
        if(password !== confirmPassword) {
            this.setState({
                error: 'Confirm password not match'
            });
        }else{
            Accounts.createUser({
                email,
                password,
                username: id,
                password:password,
                profile: { 
                    name,
                    color: 'blue'
                }},(err) => {
                    if(err) {
                        this.setState({
                          error: err.reason
                        });
                      }else{
                        this.setState({
                          error: ''
                        });
                      }
            });
            
            chatkit.createUser({
                id: id,
                name: name,
                email:email,
                customData: {
                avatarColor: 'blue',
                role:"ctv"
                },
            })
            .then(() => {
                //Gán role
                chatkit.assignGlobalRoleToUser({
                    userId: id,
                    roleName: 'admin',
                })
                    .then(() => {
                    
                    }).catch((err) => {
                    console.log(err);
                    });
            });
    }
  }

    render() {
        console.log(chatkit.getUsers());
        let { error } = this.state;
        return (
            <LoginContainer>
                <div className="login-form">
                    <img className="logo" src="./assets/img/SVG/logo.svg" alt="logodchat" />
                    <form method="POST" onSubmit={this.handleSubmit} ref="signUpForm">
                        <label htmlFor="userID">Your ID</label>
                        <input className="text-box" type="text" name="userID" ref="userID" required  minLength={8} autoFocus  />
                        <label htmlFor="username">Display name</label>
                        <input className="text-box" type="text" name="username" ref="username" maxLength={30} required />
                        <label htmlFor="psw">Password</label>
                        <input className="text-box" type="password" name="psw" ref="psw" maxLength={20} required />
                        <label htmlFor="psw">Confirm password</label>
                        <input className="text-box" type="password" name="cfpsw" ref="cfpsw" maxLength={20} required />
                        <label htmlFor="email">Your email</label>
                        <input className="text-box" type="email" name="email" ref="email" required />
                        <p className="error">{error ? error : ''}</p>
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

export default SignupForm;