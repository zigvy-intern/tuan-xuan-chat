import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Clients } from '../../../../api/clients/clients';

class Table extends Component {

    renderListClients = () => {
        return this.props.clients.map((client) => {
            return (
                <div key={client._id} className="table__row table__row--pading-row">
                    <div className="col__name">
                        <a href="profile-guest.html">{client.name}</a>
                    </div>
                    <div className="col__email">
                        {client.email}
                    </div>
                    <div className="col__location">
                        {client.location}
                    </div>
                    <div className="col__first-seen">

                    </div>
                    <div className="col__last-seen">

                    </div>
                    <div className="col__browser">
                        {client.browser}
                    </div>
                </div>
            );
        })
    }

    render() {
        return (
            <React.Fragment>
                <header className="table__row table__heading--padding-heading">
                    <div className="col__name table__heading">
                        Name
                        <div className="col__sort">
                            <span className="icon-sort col__sort--asc" />
                            <span className="icon-sort col__sort--desc" />
                        </div>
                    </div>
                    <div className="col__email table__heading">
                        Email
                        <div className="col__sort">
                            <span className="icon-sort col__sort--asc" />
                            <span className="icon-sort col__sort--desc" />
                        </div>
                    </div>
                    <div className="col__location table__heading">
                        Location
                        <div className="col__sort">
                            <span className="icon-sort col__sort--asc" />
                            <span className="icon-sort col__sort--desc" />
                        </div>
                    </div>
                    <div className="col__first-seen table__heading">
                        First seen
                        <div className="col__sort">
                            <span className="icon-sort col__sort--asc" />
                            <span className="icon-sort col__sort--desc" />
                        </div>
                    </div>
                    <div className="col__last-seen table__heading">
                        Last seen
                        <div className="col__sort">
                            <span className="icon-sort col__sort--desc" />
                        </div>
                    </div>
                    <div className="col__browser table__heading">
                        Browser
                        <div className="col__sort">
                            <span className="icon-sort col__sort--asc" />
                        </div>
                    </div>
                </header>
                {this.renderListClients()}
            </React.Fragment>
        );
    }
}
export default withTracker(() => {
    return {
        clients: Clients.find({}, { sort: { createdAt: -1 } }).fetch()
    };
})(Table);