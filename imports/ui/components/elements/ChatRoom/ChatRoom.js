import React, { Component } from 'react';
import ChatLine from '../ChatLine/ChatLine';
import Avatar from '../Avatar/Avatar';
import InputBox from '../InputBox/InputBox';

class ChatRoom extends Component {
    state = {  }
    render() { 
        return ( 
        <React.Fragment>
        <section className="conversation__internal-chat-room">
        <div className="chatbox border-box">
          <header>
            <p className="bold">INTERNAL CHAT ROOM</p>
            <div className="avatar-row">
              <Avatar color="green" size="medium" name="U"/>
              <Avatar color="pink" size="medium" name="T"/>
              <Avatar color="red" size="medium" name="A"/>
              <Avatar color="blue" size="medium" name="X"/>
              <Avatar color="cyan" size="medium" name="N"/>
            </div>
          </header>
          {/* Show mess part*/}
          <section className="chatbox__content">
            <ChatLine type="send"/>
            <ChatLine type="send"/>
            <ChatLine type="send"/>
            <ChatLine type="send"/>
            <ChatLine type="receive"/>
            
          </section>
          {/* Chat input & option */}
          <InputBox tab=""/>
          </div>
          </section>
          </React.Fragment>
       );
    }
}
 
export default ChatRoom;