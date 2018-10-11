import React, { Component } from 'react';
import AppsettingPage from './ui/pages/dchat/appsetting/appsetting';
import NotificationPage from './ui/pages/dchat/notification/notification';
import MemberPage from './ui/pages/dchat/member/member';
import GuestPage from './ui/pages/dchat/guest/guest';
import ConversationPage from './ui/pages/dchat/conversation/conversation';
import SwitchappsPage from './ui/pages/dchat/switchapps/switchapps';
import PeoplePage from './ui/pages/dchat/people/people';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';

class App extends Component {
    state = {  }

    render() { 
        var thisUrl="dchat";
        return (
        <Router>
            <Switch>
                <Route path={`/`} exact render={() => <NotificationPage/>} />
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