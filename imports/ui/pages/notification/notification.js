import React, { Component } from 'react';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import TopHeader from '../../layouts/TopHeader/TopHeader';
import MainContent from '../../layouts/MainContent/MainContent';
import MenuSide from '../../layouts/MenuSide/MenuSide';
import NotificationContainer from '../../containers/NotificationContainer/NotificationContainer';

const NotificationPage = () => {
    return (
        MainLayout(
            <TopHeader group="name" name="notification"/>,
            <MenuSide/>,
            MainContent({children:<NotificationContainer/>, class:"main-container "+"noti-wrapper"})
        )
      );
}
 
export default NotificationPage;