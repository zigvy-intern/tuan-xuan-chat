import React, { Component } from 'react';

class Avatar extends Component {

    render() { 
        let tooltip=null;
        if(this.props.size=="medium" && this.props.tooltip)
            tooltip= <div className="tooltip">{this.props.tooltip}</div>

        let name= null;
        if(this.props.name)
             name=this.props.name.slice(0,1)

        return (
            <React.Fragment>
            <div className={"avatar avatar--" + this.props.size + " bgr-"+this.props.color+ " avatar--responsive"} 
                url={this.props.url}>{name}
                       {tooltip}
            </div>
            </React.Fragment>
          );
    }

}
 
export default Avatar;