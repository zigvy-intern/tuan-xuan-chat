import React, { Component } from 'react';

class SwitchTab extends Component {
    state = {  }
    render() { 
        let tab;

        if(this.props.type =="create")
    {
          tab=(<div className='switch__item--create border-box' key="create">
                <span>Create new app</span>
            </div>);
        
    }
        else
    { 
       tab=
       ( <div className='switch__item border-box' key={this.props.id}>
        <h3 className="switch__item-title">{this.props.title}</h3>
        <span className="switch__item-noti">{this.props.notiNumber}</span>
        <span className="switch__item-url">{this.props.url}</span>
        </div>
       )}

    return (tab);
}
}
 
export default SwitchTab;