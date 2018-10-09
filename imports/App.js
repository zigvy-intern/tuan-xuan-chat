import React, { Component } from 'react';
import MainLayout from './ui/layouts/MainLayout/MainLayout';
import TopHeader from './ui/layouts/TopHeader/TopHeader';
import MenuSide from './ui/layouts/MenuSide/MenuSide';
import MainContent from './ui/layouts/MainContent/MainContent';
import Inbox from './ui/components/elements/Inbox/Inbox';
import MemberContainer from './ui/containers/MemberContainer/MemberContainer';
import SwitchContainer from './ui/containers/SwitchContainer/SwitchContainer';
import ConversationContainer from './ui/containers/ConversationContainer/ConversationContainer';
import NotificationContainer from './ui/containers/NotificationContainer/NotificationContainer';
import PeopleContainer from './ui/containers/PeopleContainer/PeopleContainer';

class App extends Component {
    state = {  }

    render() { 
        let mainClass="main-container "
        return (
            
            MainLayout(

            <TopHeader/>,

            <MenuSide/>,

            // MainContent({children:<SwitchContainer/>, class:"switchapps"})
            // MainContent({children:<MemberContainer/>, class:mainClass+"member"})
            // MainContent({children:<ConversationContainer/>, class:mainClass+"conversation-wrapper"})
            // MainContent({children:<NotificationContainer/>, class:mainClass+"noti-wrapper"})
            MainContent({children:<PeopleContainer/>, class:mainClass+"people-wrapper"})
            )
        );

    }
}
 
export default App;