import React, { Component } from 'react';

class Button extends Component {
    state = {  }
    render() { 
        return ( 
            <input type="submit" className={"btn btn--"+this.props.color+" btn--"+this.props.size} value={this.props.name}/>
                    );
    }
}
 
export default Button;