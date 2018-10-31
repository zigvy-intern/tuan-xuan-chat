import React, { Component } from 'react';
import MainLayout from '../../../layouts/MainLayout/MainLayout';
import TopHeader from '../../../layouts/TopHeader/TopHeader';
import MainContent from '../../../layouts/MainContent/MainContent';
import MenuSide from '../../../layouts/MenuSide/MenuSide';
import NotificationContainer from '../../../containers/NotificationContainer/NotificationContainer';

const NotificationPage = () => {
    return (
        <React.Fragment>
            <TopHeader group="name" name="notification" />
            <MainContent class={"main-container " + "noti-wrapper"}>
                {/* <NotificationContainer/> */}
            </MainContent>
        </React.Fragment>
    );
}

export default NotificationPage;