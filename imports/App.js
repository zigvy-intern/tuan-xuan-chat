import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom';
import LoginContainer from './ui/containers/LoginContainer/LoginContainer';
import MainLayout from './ui/layouts/MainLayout/MainLayout';
import MenuSide from './ui/layouts/MenuSide/MenuSide';
import NotificationPage from './ui/pages/dchat/notification/notification';
import PeoplePage from './ui/pages/dchat/people/people';
import ConversationPage from './ui/pages/dchat/conversation/conversation';
import AppsettingPage from './ui/pages/dchat/appsetting/appsetting';
import MemberPage from './ui/pages/dchat/member/member';
import SwitchappsPage from './ui/pages/dchat/switchapps/switchapps';
import LoginForm from './ui/components/elements/LoginForm/LoginForm';
import SignupForm from './ui/components/elements/SignupForm/SignupForm';
import ClientPage from './ui/pages/user/ClientPage';
// import DchatPage from './ui/pages/dchat/index';
// import LoginPage from './ui/pages/login/login';

const NotFound = () => {
    return (<h1 style={{ textAlign: "center", marginTop: "200px" }}>PAGE NOT FOUND!</h1>);
}

class App extends Component {
    state = {}

    render() {

        return (
            // <Router>
            //     <React.Fragment>
            //         {/* <Link to="/notification">Click</Link> */}
            //         <Switch>
            //             <Route path={`/`} exact component={LoginForm} />
            //             <Route path={`/signup`} exact component={SignupForm} />
            //             <Route path={`/notification`} exact component={NotificationPage} />
            //             <Route path={`/people`} exact component={PeoplePage} />
            //             <Route path={`/conversation`} exact component={ConversationPage} />
            //             <Route path={`/appsetting`} exact component={AppsettingPage} />
            //             <Route path={`/profile`} exact component={MemberPage} />
            //             <Route path={`/switchapps`} exact component={SwitchappsPage} />
            //             <Route component={NotFound} />
            //         </Switch>
            //     </React.Fragment>

            // </Router>
            <ClientPage/>
        );

    }
}

export default App;