import React, { Component } from 'react';
import Avatar from '../Avatar/Avatar';

class ChatLine extends Component {
    state = {  }
    render() { 
        let chatline=null;
        if(this.props.sender.id===this.props.currentUser.id)
        {
            chatline= <div className="chat-line chat-line--send">
            <div className="chat-line__content-wrap">
            <div className="chat-line__content">
                <p className="inbox__content">{this.props.content}</p>
                <p className="inbox__time">{this.props.time}</p>
            </div>
            </div>
            <Avatar size="medium" color="red" url="" name={this.props.currentUser.name}/>
        </div>

        }
        else
        {
            chatline= <div className="chat-line chat-line--receive">
                   <Avatar size="medium" color="orange" url="" name={this.props.sender.name}/>
                    <div className="chat-line__content-wrap">
                    <div className="chat-line__content">
                        <p className="inbox__content">{this.props.content}</p>
                        <p className="inbox__time">{this.props.time}</p>
                    </div>
                    </div>
                </div>
        }
        return ( 
            <React.Fragment>
                <div className="chat-line__wrap">
                    {chatline}
                </div>
            </React.Fragment>
         );
    }
}
 
export default ChatLine;