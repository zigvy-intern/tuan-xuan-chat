import React, { Component } from 'react';
import AppsettingPage from './ui/pages/dchat/appsetting/appsetting';
import NotificationPage from './ui/pages/dchat/notification/notification';
import MemberPage from './ui/pages/dchat/member/member';
import GuestPage from './ui/pages/dchat/guest/guest';
import ConversationPage from './ui/pages/dchat/conversation/conversation';
import SwitchappsPage from './ui/pages/dchat/switchapps/switchapps';
import PeoplePage from './ui/pages/dchat/people/people';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import MainContent from './ui/layouts/MainContent/MainContent';
import MainLayout from './ui/layouts/MainLayout/MainLayout';
import MenuSide from './ui/layouts/MenuSide/MenuSide';

class App extends Component {
    state = {  }

    render() { 

        return (
        <Router>
            <div className="grid-container">
            <MenuSide/>
            <Switch>
                <Route path={`/notification`} exact component={NotificationPage} />
                <Route path={`/people`} exact component={PeoplePage}  />
                <Route path={`/conversation`} exact component={ConversationPage} />
                <Route path={`/appsetting`} exact component={AppsettingPage} />
                <Route path={`/profile`} exact component={MemberPage}/>
                <Route path={`/switchapps`} exact component={SwitchappsPage} />
            </Switch>
            </div>
        </Router>
        );

    }
}
 
export default App;