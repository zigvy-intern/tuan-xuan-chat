import React, { Component } from 'react';
import AppsettingPage from './ui/pages/appsetting/appsetting';
import NotificationPage from './ui/pages/notification/notification';
import MemberPage from './ui/pages/member/member';
import GuestPage from './ui/pages/guest/guest';
import ConversationPage from './ui/pages/conversation/conversation';
import SwitchappsPage from './ui/pages/switchapps/switchapps';
import PeoplePage from './ui/pages/people/people';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';

class App extends Component {
    state = {  }

    render() { 
        var thisUrl="dchat";
        return (
        <Router>
            <Switch>
                <Route path={`/${thisUrl}/notification`} exact render={() => <NotificationPage/>} />
                <Route path={`/${thisUrl}/people`} render={() => <PeoplePage/>} />
                <Route path={`/${thisUrl}/conversation`} render={() => <ConversationPage/>} />
                <Route path={`/${thisUrl}/appsetting`} render={() => <AppsettingPage/>} />
                <Route path={`/${thisUrl}/profile`} render={() => <MemberPage/>} />
                <Route path={`/${thisUrl}/switchapp`} render={() => <SwitchappsPage/>} />
            </Switch>
        </Router>
        );

    }
}
 
export default App;