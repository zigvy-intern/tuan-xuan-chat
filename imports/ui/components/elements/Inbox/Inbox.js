import React, { Component } from 'react';
import Avatar from '../Avatar/Avatar';
import { chatkit } from '../../../../api/chatkit/clientobj';
import Chatkit from '@pusher/chatkit-server';
class Inbox extends Component {
  constructor()
  {
    super()
    this.state={
      createdByUser:{}
    }
  }
  getUser = () =>
  {
    chatkit.getUser({
      id:this.props.createdByUserId
    })
      .then(user => {
        console.log('got a user', user)
        return user

      })
      .catch(err => console.error(err))
    }
  render() {
    return (
      <React.Fragment>
        <div className={this.props.className} onClick={this.props.onClick}>
          <section>
            <Avatar color='yellow' size='medium' url="" name={this.props.sender} />
            <div>
              <p className="inbox__email bold">{this.props.email}</p>
              <p className="inbox__time">{this.props.time}</p>
            </div>
          </section>
          <section>
            <Avatar color='pink' size='small' url="" name={this.props.receiver} />
            <p className="inbox__content">{this.props.inboxContent}</p>
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default Inbox;