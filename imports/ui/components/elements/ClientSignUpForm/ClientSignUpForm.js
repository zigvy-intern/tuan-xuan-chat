import React, { Component } from 'react';
import Chatkit from '@pusher/chatkit-server';
import {chatkit} from '../../../../api/chatkit/clientobj';
import {Clients} from '../../../../api/clients/clients';
import {randomColor} from '../../../../api/users/users'

class ClientSignUpForm extends Component {
    state = {}

    onSubmit = (e) =>
    {
        e.preventDefault()
        let email = this.refs.email.value.trim();
        let username = this.refs.username.value.trim();
        let id = '_' + Math.random().toString(36).substr(2, 9);
        let color = randomColor()
        let user = {id, email, username, color}

        chatkit.createUser({
            id: id,
            name: username,
            customData: {
                email:email,
              avatarColor: color,
              role:"client"
            },
          })
          .then(() => {
            console.log("Successfully");
            localStorage.setItem('client', JSON.stringify(user));
            //Insert vao MongoDB
            // Clients.insert({
            //     name:username,
            //     email: email,
            // })
            //Gán role   
            chatkit.assignGlobalRoleToUser({
                userId: id,
                roleName: 'client',
              })
                .then(() => {
                  
                }).catch((err) => {
                  console.log(err);
                });
            

            this.refs.signUpForm.reset()
            this.props.isDisplayChat(true); //truyền về cha
            
          }).catch((err) => {
            console.log("Fail! "+err.error_description)
            console.log(err);
          });

         
    }

    render() {
        return (
        
        <div className="login-form client-signup">
            <header className="client-signup__header bgr-pink">
                <p>Need help?</p>
                <div className="minimal-line" />
            </header>
            <form method="POST" onSubmit={this.onSubmit} ref="signUpForm">
                <label htmlFor="email">Your email (*) </label>
                <input className="text-box" type="email" name="email" ref="email" required autoComplete="off" autoFocus />
                <label htmlFor="psw">Your name (*)</label>
                <input className="text-box" type="text" name="username" ref="username" maxLength={30} required autoComplete="off" />
                <button className="btn btn--large btn--blue" type="submit">START CHAT</button>
            </form>
        </div>
        );
    }
}

export default ClientSignUpForm;