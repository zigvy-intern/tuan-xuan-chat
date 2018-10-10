import React, { Component } from 'react';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import TopHeader from '../../layouts/TopHeader/TopHeader';
import MainContent from '../../layouts/MainContent/MainContent';
import MenuSide from '../../layouts/MenuSide/MenuSide';
import GuestContainer from '../../containers/GuestContainer/GuestContainer';

const GuestPage = () => {
    return ( 
        MainLayout(
            <TopHeader group="name" name="profile"/>,
            <MenuSide/>,
            MainContent({children:<GuestContainer/>, class:"main-container "+"guest"})
        )
     );
}
 
export default GuestPage;