import React, { Component } from 'react';
import TabStrip from '../../components/elements/TabStrip/TabStrip';
import Table from '../../components/elements/Table/Table';

class PeopleContainer extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
            <section className="tab-container people" data-simplebar>
            <TabStrip color="cyan" title="Name"/>
            <TabStrip color="pink" title="Email" tab="1"/>
            <TabStrip color="green" title="Location"/>
            <TabStrip color="yellow" title="First seen"/>
            <TabStrip color="red" title="Last seen"/>
            <TabStrip color="cyan" title="Browser"/>
            <TabStrip color="yellow" title="Browser language"/>
            <TabStrip color="green" title="Web sessions" tab="2"/>

            </section>
            <section className="tab-detail-container people">
                <div className="border-box table-detail">
                   <Table/>
                </div>
                <footer>
                    <button className="icon-next border-box button--pre" />
                    <button className="icon-next border-box button--next" />
                </footer>
            </section>

            </React.Fragment>
         );
    }
}
 
export default PeopleContainer;