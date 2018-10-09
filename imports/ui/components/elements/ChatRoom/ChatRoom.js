import React, { Component } from 'react';
import ChatLine from '../ChatLine/ChatLine';

class ChatRoom extends Component {
    state = {  }
    render() { 
        return ( <section className="conversation__internal-chat-room">
        <div className="chatbox border-box">
          <header>
            <p className="bold">INTERNAL CHAT ROOM</p>
            <div className="avatar-row">
              <a className="avatar avatar--medium bgr-blue" href="#">H</a>
              <a className="avatar avatar--medium bgr-yellow" href="#">H</a>
              <a className="avatar avatar--medium bgr-cyan" href="#">H</a>
              <a className="avatar avatar--medium bgr-green" href="#">H</a>
              <a className="avatar avatar--medium bgr-pink" href="#">H</a>
              <a className="avatar avatar--medium bgr-orange" href="#">H</a>
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