import React, { Component } from 'react';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import TopHeader from '../../layouts/TopHeader/TopHeader';
import MainContent from '../../layouts/MainContent/MainContent';
import MenuSide from '../../layouts/MenuSide/MenuSide';
import AppsettingContainer from '../../containers/AppsettingContainer/AppsettingContainer';


const AppsettingPage = () => {
    return ( 
        MainLayout(
            <TopHeader group="name" name="app setting"/>,
            <MenuSide/>,
            MainContent({children:<AppsettingContainer/>, class:"main-container "+"appsetting"})
        )
     );
}
 
export default AppsettingPage;