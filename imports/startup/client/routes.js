import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Router, Switch, Route, Redirect } from 'react-router';

import MainLayout from '../../ui/layouts/MainLayout/MainLayout';
import MenuSide from '../../ui/layouts/MenuSide/MenuSide';

import NotificationPage from '../../ui/pages/dchat/notification/notification';
import PeoplePage from '../../ui/pages/dchat/people/people';
import ConversationPage from '../../ui/pages/dchat/conversation/conversation';
import AppsettingPage from '../../ui/pages/dchat/appsetting/appsetting';
import MemberPage from '../../ui/pages/dchat/member/member';
import SwitchappsPage from '../../ui/pages/dchat/switchapps/switchapps';
import LoginForm from '../../ui/components/elements/LoginForm/LoginForm';
import SignupForm from '../../ui/components/elements/SignupForm/SignupForm';
import ClientPage from '../../ui/pages/user/ClientPage';
//Create Store
import { createStore } from 'redux';
import myReducer from '../../ui/reducers/index';
import { Provider } from 'react-redux';

const store = createStore(
  myReducer, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

import createHistory from 'history/createBrowserHistory';
const history = createHistory();

const unauthenticatedPages = ['/','/admin','/signup'];
const authenticatedPages = ['/notification','/people','/conversation','/appsetting','/profile','/switchapps'];

const NotFound = () => {
  return (
    <h1 style={{ textAlign: 'center', marginTop: '200px', fontSize: '80px' }}>
      404 - PAGE NOT FOUND!
    </h1>
  );
};

const onEnterPublicPage = Component => {
    if (Meteor.userId()) {
      return <Redirect to="/notification" />;
    } else {
      return <Component />;
    }
};

const onEnterPrivatePage = Component => {
    if (!Meteor.userId()) {
      return <Redirect to="/" />;
    } else {
      return (
        <MainLayout>
            <MenuSide />
            <Component />
        </MainLayout>
        );
    }
};

export const routes = (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path={`/`} exact component={ClientPage} />
        <Route path={`/admin`} exact render={() => onEnterPublicPage(LoginForm)}/>
        <Route path={`/signup`} exact component={SignupForm} />
        <Route path={`/notification`} exact render={() => onEnterPrivatePage(NotificationPage)} />
        <Route path={`/people`} exact render={() => onEnterPrivatePage(PeoplePage)} />
        <Route path={`/conversation`} exact render={() => onEnterPrivatePage(ConversationPage)} />
        <Route path={`/appsetting`} exact render={() => onEnterPrivatePage(AppsettingPage)} />
        <Route path={`/profile`} exact render={() => onEnterPrivatePage(MemberPage)} />
        <Route path={`/switchapps`} exact render={() => onEnterPrivatePage(SwitchappsPage)} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>
);

export const isAuthenChange = isAuthenticated => {
    const pathname = history.location.pathname;
    const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
    const isAuthenticatedPage = authenticatedPages.includes(pathname);
    
    if (isUnauthenticatedPage && isAuthenticated) {
      history.push('/notification');
    } else if (isAuthenticatedPage && !isAuthenticated) {
      history.push('/admin');
    }
};