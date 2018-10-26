import React, { Component } from 'react';

class ClientContainer extends Component {
    state = {  }
    render() { 
        return ( 
            <main className="client-page">
            <header>
                <img src="./assets/img/SVG/logo.svg" alt="true" />
                <h1>APP NAME</h1>
            </header>
            {this.props.children}
            </main>
         );
    }
}
 
export default ClientContainer;