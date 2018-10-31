import React, { Component } from 'react';
import NotificationPage from './notification/notification';
import PeoplePage from './people/people';
import ConversationPage from './conversation/conversation';
import AppsettingPage from './appsetting/appsetting';
import MemberPage from './member/member';
import SwitchappsPage from './switchapps/switchapps';
import {Switch, Route, BrowserRouter as Router, Redirect} from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import MenuSide from '../../layouts/MenuSide/MenuSide';

class DchatPage extends Component {
    state = {}

    render() {
        return (
            <React.Fragment>
                    <MainLayout>
                        <MenuSide />
                            <Switch>                           
                                <Route path={`/people`} exact component={PeoplePage} />
                                <Route path={`/conversation`} exact component={ConversationPage} />
                                <Route path={`/appsetting`} exact component={AppsettingPage} />
                                <Route path={`/profile`} exact component={MemberPage} />
                                <Route path={`/switchapps`} exact component={SwitchappsPage} />
                            </Switch>
                    </MainLayout>
            </React.Fragment>
        );
    }
}

export default DchatPage;