import React, { Component } from 'react';

class IconButton extends Component {
    state = {  }
    render() { 
        let bgr=null;
        if(this.props.color)
        {
            bgr="bgr-"+this.props.color;
        }
        return (
            <React.Fragment>
                <a className={"icon "+bgr+" icon-"+this.props.icon} href={this.props.href}>
                    </a>
                    
            </React.Fragment>
          );
    }
}
 
export default IconButton;