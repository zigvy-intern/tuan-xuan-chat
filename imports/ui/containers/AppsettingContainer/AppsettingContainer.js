import React, { Component } from 'react';
import IconStrip from '../../components/elements/IconStrip/IconStrip';
import SettingGeneralTab from '../../components/elements/SettingTab/elements/SettingGeneralTab';
import SettingMemberTab from '../../components/elements/SettingTab/elements/SettingMemberTab';
import SettingMessagingTab from '../../components/elements/SettingTab/elements/SettingMessagingTab';
import SettingAppearanceTab from '../../components/elements/SettingTab/elements/SettingAppearanceTab';
import SettingBlockedTab from '../../components/elements/SettingTab/elements/SettingBlockedTab';
import SettingUpgradeTab from '../../components/elements/SettingTab/elements/SettingUpgradeTab';
import SettingBillingTab from '../../components/elements/SettingTab/elements/SettingBillingTab';
class AppsettingContainer extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
            <section className="tab-container">
                <IconStrip title="General" color="cyan" icon="general"/>
                <IconStrip title="Team member" color="pink" icon="member"/>
                <IconStrip title="Messaging" color="green" icon="messaging"/>
                <IconStrip title="Appearance" color="blue" icon="appearance"/>
                <IconStrip title="Blocked people" color="red" icon="blocked"/>
                <IconStrip title="Upgrade" color="yellow" icon="upgrade"/>
                <IconStrip title="Billing" color="pink" icon="billing"/>

            </section>
            <section className="tab-detail-container" data-simplebar>
               <SettingGeneralTab/>
               <SettingMemberTab/>
               <SettingMessagingTab/>
               <SettingAppearanceTab/>
               <SettingBlockedTab/>
               <SettingUpgradeTab/>
               <SettingBillingTab/>
                {/* Bunch of tabs here */}
            </section>
            </React.Fragment>
         );
    }
}
 
export default AppsettingContainer;