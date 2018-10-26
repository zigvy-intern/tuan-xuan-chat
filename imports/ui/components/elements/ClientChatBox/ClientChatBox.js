import React, { Component } from 'react';
import ChatContent from '../ChatContent/ChatContent';
import InputBox from '../InputBox/InputBox';

class ClientChatBox extends Component {
    state = {}
    render() {
        return (
            <div className="client-chatbox">
                <header className="client-signup__header bgr-pink">
                    <p>Chatroom</p>
                    <div className="minimal-line" />
                </header>
                <div className="client-chatbox__container">
                    <ChatContent />
                    {/* Chat input & option */}
                    <InputBox
                        // currentUser={this.props.currentUser}
                        // sendMessage={this.props.sendMessage}
                        btnColor="blue"
                    />
                </div>
            </div>

        );
    }
}

export default ClientChatBox;