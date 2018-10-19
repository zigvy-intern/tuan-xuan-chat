import React, { Component } from 'react';

class LoginContainer extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="login-page">
                {this.props.children}
            </div>
         );
    }
}
 
export default LoginContainer;