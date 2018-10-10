import React, { Component } from 'react';
import AppsettingPage from './ui/pages/appsetting/appsetting';
import NotificationPage from './ui/pages/notification/notification';
import MemberPage from './ui/pages/member/member';
import GuestPage from './ui/pages/guest/guest';
import ConversationPage from './ui/pages/conversation/conversation';
import SwitchappsPage from './ui/pages/switchapps/switchapps';
import PeoplePage from './ui/pages/people/people';

class App extends Component {
    state = {  }

    render() { 
       
        return (
            
            <AppsettingPage/>
            
        );

    }
}
 
export default App;