import React, { Component } from 'react';

class IconStrip extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <a className="border-box tab__label">
                    <div className={"icon bgr-"+this.props.color+" icon-"+this.props.icon}>
                    </div>
                    <p>{this.props.title}</p>
                </a>
            </React.Fragment>
         );
    }
}
 
export default IconStrip;