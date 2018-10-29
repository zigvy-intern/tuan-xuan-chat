import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class ClientContainer extends Component {
    state = {  }
    render() { 
        return ( 
            <main className="client-page">
            <header>
                <img src="./assets/img/SVG/logo.svg" alt="true" />
                <h1>APP NAME</h1>
                <Link to="/admin"><b style={{marginLeft:"200px"}}>Login</b></Link>
            </header>
            {this.props.children}
            </main>
         );
    }
}
 
export default ClientContainer;