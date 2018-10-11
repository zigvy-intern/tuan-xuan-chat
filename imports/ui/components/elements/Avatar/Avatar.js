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
            <div className={"avatar avatar--" + this.props.size + " bgr-"+this.props.color+ " avatar--responsive"} 
                url={this.props.url}>{this.props.name}
                       {tooltip}
            </div>
            </React.Fragment>
          );
    }

}
 
export default Avatar;