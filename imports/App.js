import React, { Component } from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import LoginPage from './ui/pages/login/login';
import DchatPage from './ui/pages/dchat';
class App extends Component {
    state = {  }

    render() { 

        return (
            <Router>
                <Switch>
                    <Route path={`/`} exact component={LoginPage} />
                    <Route path={`/notification`} exact component={DchatPage} />
                </Switch>
            </Router>
        );

    }
}
 
export default App;