import React, { Component } from 'react';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import TopHeader from '../../layouts/TopHeader/TopHeader';
import MainContent from '../../layouts/MainContent/MainContent';
import MenuSide from '../../layouts/MenuSide/MenuSide';
import SwitchContainer from '../../containers/SwitchContainer/SwitchContainer';

const SwitchappsPage = () => {
    return (    
        <MainLayout>
        <TopHeader group="name" name="switch apps"/>
        <MenuSide/>
        <MainContent class="switchapps">
            <SwitchContainer/>
        </MainContent>
        </MainLayout>
      );
}
 
export default SwitchappsPage;