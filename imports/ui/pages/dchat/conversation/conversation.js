import React, { Component } from 'react';
import MainLayout from '../../../layouts/MainLayout/MainLayout';
import TopHeader from '../../../layouts/TopHeader/TopHeader';
import MainContent from '../../../layouts/MainContent/MainContent';
import MenuSide from '../../../layouts/MenuSide/MenuSide';
import ConversationContainer from '../../../containers/ConversationContainer/ConversationContainer';

const ConversationPage = () => {
    return ( 
        <React.Fragment>
            <TopHeader group="conversation"/>
           
            <MainContent class={"main-container "+"conversation-wrapper"}>
                <ConversationContainer/>
            </MainContent>
       </React.Fragment>
        
     );
}
 
export default ConversationPage;