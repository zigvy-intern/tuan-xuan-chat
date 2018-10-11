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
        var thisUrl="dchat";
        return (
        <Router>
            <MainLayout>
            <MenuSide/>
            <Switch>
                <Route path={`/`} component={NotificationPage} />
                <Route path={`/${thisUrl}/people`} component={PeoplePage}  />
                <Route path={`/${thisUrl}/conversation`} component={ConversationPage} />
                <Route path={`/${thisUrl}/appsetting`} component={AppsettingPage} />
                <Route path={`/${thisUrl}/profile`} component={MemberPage}/>
                <Route path={`/${thisUrl}/switchapp`} component={SwitchappsPage} />
            </Switch>
            </MainLayout>
        </Router>
        );

    }
}
 
export default App;