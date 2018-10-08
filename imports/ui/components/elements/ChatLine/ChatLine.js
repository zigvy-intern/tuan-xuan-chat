import React, { Component } from 'react';
import Avatar from '../Avatar/Avatar';

class ChatLine extends Component {
    state = {  }
    render() { 
        let chatline;
        if(this.props.type=="send")
        {
            chatline= <div className="chat-line chat-line--send" key="1">
            <div className="chat-line__content-wrap">
            <div className="chat-line__content">
                <p className="inbox__content">{this.props.content}</p>
                <p className="inbox__time">{this.props.time}</p>
            </div>
            </div>
            <Avatar size="medium" color="red" url="" name="K"/>
        </div>

        }
        else if(this.props.type=="receive")
        {
            chatline= <div className="chat-line chat-line--receive" key="2">
                   <Avatar size="medium" color="orange" url="" name="A"/>
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