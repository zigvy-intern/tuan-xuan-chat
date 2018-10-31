import React, { Component } from 'react';
import Button from '../Button/Button';

import InputBox from '../InputBox/InputBox';
import ChatContent from '../ChatContent/ChatContent'
class ChatBox extends Component {
    state = {  }

    render() { 
        return ( 
            <React.Fragment>
        <div className="chatbox-container chatbox border-box">
            <header className="chatbox-header">
                <div className="chatbox-header__main bold">
                {this.props.currentRoom.name}
                </div>
                <div className="chatbox-header__right">
                <i className="fas fa-ellipsis-h" />
                </div>
            </header>
            {/* Show mess part*/}
            <ChatContent messages={this.props.messages}
                currentUser={this.props.currentUser}
            />
            
            {/* Chat input & option */}
            <InputBox tab="1"
                currentUser={this.props.currentUser}
                sendMessage={this.props.sendMessage}
            />
            </div>

            </React.Fragment>
         );
    }
}
 
export default ChatBox;