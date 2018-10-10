import React, { Component } from 'react';
import IconButton from '../IconButton/IconButton'
class IconStrip extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <a className="border-box tab__label">
                    <IconButton icon={this.props.icon} color={this.props.color}/>
                    <p>{this.props.title}</p>
                </a>
            </React.Fragment>
         );
    }
}
 
export default IconStrip;