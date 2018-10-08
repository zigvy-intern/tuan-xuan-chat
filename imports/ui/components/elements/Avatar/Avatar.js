import React, { Component } from 'react';

class Avatar extends Component {

    render() { 
        return (
            <React.Fragment>
            <a className={"avatar avatar--" + this.props.size + " bgr-"+this.props.color+ " avatar--responsive"} href={this.props.url}>{this.props.name}</a>
            </React.Fragment>
          );
    }

}
 
export default Avatar;