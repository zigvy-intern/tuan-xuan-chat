import React, { Component } from 'react';
import FormInput from '../FromInput/FromInput';

class TabStrip extends Component {
    state = {  }
    render() { 
        let filter;
        if(this.props.tab=="2")
        {
            filter= 
            <React.Fragment>
            <span className="text-box__label">From</span>
            <FormInput placeholder={this.props.placeholder}/>
            <span className="text-box__label">To</span>
            <FormInput placeholder={this.props.placeholder}/>
            </React.Fragment>
        }
        else if (this.props.tab=="1")
        {
            filter=<FormInput type="email" placeholder={this.props.placeholder}/>
        }
        else
        filter=null;
        return ( 
            <div className="tab__label border-box">
                <div className={"border-left-box border--"+this.props.color}>
                <p className="border-left__title">{this.props.title}</p>
                </div>
                {filter}
            </div>
         );
    }
}
 
export default TabStrip;