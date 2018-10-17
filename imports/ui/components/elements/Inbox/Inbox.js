import React, { Component } from 'react';
import Avatar from '../Avatar/Avatar';

class Inbox extends Component {
    state = {  }
    render() { 
        return (
          <React.Fragment> 
        <div className={this.props.className} onClick={this.props.onClick}>
        <section>
          <Avatar color='yellow' size='medium' url="" name={this.props.sender}/>
          <div>
            <p className="inbox__email bold">{this.props.email}</p>
            <p className="inbox__time">{this.props.time}</p>
          </div>
        </section>
        <section>
        <Avatar color='pink' size='small' url="" name={this.props.receiver}/>
          <p className="inbox__content">{this.props.inboxContent}</p>
        </section>
      </div>
      </React.Fragment>
       );
    }
}
 
export default Inbox;