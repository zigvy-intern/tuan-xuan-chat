import React, { Component } from 'react';
import MainLayout from './ui/layouts/MainLayout/MainLayout';
import TopHeader from './ui/layouts/TopHeader/TopHeader';
import MenuSide from './ui/layouts/MenuSide/MenuSide';
import MainContent from './ui/layouts/MainContent/MainContent';
import Inbox from './ui/components/elements/Inbox/Inbox';
import MemberContainer from './ui/containers/MemberContainer/MemberContainer';
import SwitchContainer from './ui/containers/SwitchContainer/SwitchContainer';

class App extends Component {
    state = {  }

    render() { 
        return (
            
            MainLayout(

            <TopHeader/>,

            <MenuSide/>,

            MainContent({children:<SwitchContainer/>, class:"switchapps"})
            
            )
        );

    }
}
 
export default App;