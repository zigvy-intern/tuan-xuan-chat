import React, { Component } from 'react';
import LoginForm from '../../components/elements/LoginForm/LoginForm';
import SignupForm from '../../components/elements/SignupForm/SignupForm';
import LoginContainer from '../../containers/LoginContainer/LoginContainer';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import DchatPage from '../dchat/index';


class LoginPage extends Component {
    state = {}
    render() {
        return (
            <Router>
                
                <LoginContainer>
                        
                </LoginContainer>
                        
            </Router>
        );
    }
}

export default LoginPage;