import React, { Component } from 'react';

class FormInput extends Component {
    state = {  }
    render() { 
        return ( 
            <input type={this.props.type} className="text-box" placeholder={this.props.placeholder}></input>
         );
    }
}
 
export default FormInput;