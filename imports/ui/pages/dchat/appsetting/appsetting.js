import React, { Component } from 'react';

import MainLayout from '../../../layouts/MainLayout/MainLayout';
import TopHeader from '../../../layouts/TopHeader/TopHeader';
import MainContent from '../../../layouts/MainContent/MainContent';
import MenuSide from '../../../layouts/MenuSide/MenuSide';
import AppsettingContainer from '../../../containers/AppsettingContainer/AppsettingContainer';


const AppsettingPage = () => {
    return ( 
            <React.Fragment>
            <TopHeader group="appsetting"/>

            <MainContent class={"main-container "+"appsetting"}>
                <AppsettingContainer/>
            </MainContent>
            </React.Fragment>
     );
}
 
export default AppsettingPage;