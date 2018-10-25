import React, { Component } from 'react';
import MainLayout from '../../../layouts/MainLayout/MainLayout';
import TopHeader from '../../../layouts/TopHeader/TopHeader';
import MainContent from '../../../layouts/MainContent/MainContent';
import MenuSide from '../../../layouts/MenuSide/MenuSide';
import PeopleContainer from '../../../containers/PeopleContainer/PeopleContainer';

const PeoplePage = () => {
    return ( 
        <React.Fragment>
            <MainLayout>
                <MenuSide />
                <TopHeader group="people"/>,
                <MainContent class={"main-container "+"people-wrapper"}>
                    <PeopleContainer/>
                </MainContent>
            </MainLayout>
        </React.Fragment>
    
    );
}
 
export default PeoplePage;