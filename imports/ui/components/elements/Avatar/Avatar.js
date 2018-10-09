import React, { Component } from 'react';

class Avatar extends Component {

    render() { 
        let tooltip=null;
        if(this.props.size=="medium" && this.props.email)
        {
            tooltip= <div className="tooltip">{this.props.email}</div>
        }
        return (
            <React.Fragment>
            <a className={"avatar avatar--" + this.props.size + " bgr-"+this.props.color+ " avatar--responsive"} 
                href={this.props.url}>{this.props.name}
                       {tooltip}
            </a>
            </React.Fragment>
          );
    }

}
 
export default Avatar;