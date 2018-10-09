import React, { Component } from 'react';
import ChatLine from '../ChatLine/ChatLine';
import Avatar from '../Avatar/Avatar';

class ChatRoom extends Component {
    state = {  }
    render() { 
        return ( <section className="conversation__internal-chat-room">
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
          <section className="chatbox__input">
            {/* Input space */}
            <textarea className="chat__text-box" type="text" placeholder="Enter your message here" defaultValue={""} />
            {/* More input options */}
            <footer className="chat__option">
              <ul>
                <li><a href="#">Aa</a></li>
                <li><a href="#" className="icon-attachment" /></li>
                <li><a href="#" className="icon-picture" /></li>
                <li><a href="#" className="icon-emoji" /></li>
              </ul>
              <button className="btn btn--small btn--cyan">
                Send
              </button>
            </footer>
          </section>
        </div>
      </section>
       );
    }
}
 
export default ChatRoom;