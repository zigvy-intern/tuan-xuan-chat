import React, { Component } from 'react';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import TopHeader from '../../layouts/TopHeader/TopHeader';
import MainContent from '../../layouts/MainContent/MainContent';
import MenuSide from '../../layouts/MenuSide/MenuSide';
import MemberContainer from '../../containers/MemberContainer/MemberContainer';

const MemberPage = () => {
    return ( 
        MainLayout(
            <TopHeader group="name" name="profile"/>,
            <MenuSide/>,
            MainContent({children:<MemberContainer/>, class:"main-container "+"member"})
        )
     );
}
 
export default MemberPage;