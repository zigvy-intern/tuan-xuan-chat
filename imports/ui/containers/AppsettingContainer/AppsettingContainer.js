import React, { Component } from 'react';
import IconStrip from '../../components/elements/IconStrip/IconStrip';
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
                {/* Bunch of tabs here */}
            </section>
            </React.Fragment>
         );
    }
}
 
export default AppsettingContainer;