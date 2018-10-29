import React, { Component } from 'react';
import MainLayout from '../../../layouts/MainLayout/MainLayout';
import TopHeader from '../../../layouts/TopHeader/TopHeader';
import MainContent from '../../../layouts/MainContent/MainContent';
import MenuSide from '../../../layouts/MenuSide/MenuSide';
import MemberContainer from '../../../containers/MemberContainer/MemberContainer';

const MemberPage = () => {
    return (
        <React.Fragment>
            <TopHeader group="name" name="profile" />

            <MainContent class={"main-container " + "member"}>
                <MemberContainer />
            </MainContent>
        </React.Fragment>
    );
}

export default MemberPage;