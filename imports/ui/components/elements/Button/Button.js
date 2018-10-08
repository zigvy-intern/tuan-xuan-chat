import React, { Component } from 'react';

class Button extends Component {
    state = {  }
    render() { 
        return ( 
            <button className={"btn btn--"+this.props.color+" btn--"+this.props.size}>{this.props.name}</button>
         );
    }
}
 
export default Button;