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
              <Avatar email="uyen@gmail.com" color="green" size="medium" name="U"/>
              <Avatar  email="uyen@gmail.com" color="pink" size="medium" name="T"/>
              <Avatar  email="uyen@gmail.com" color="red" size="medium" name="A"/>
              <Avatar  email="uyen@gmail.com" color="blue" size="medium" name="X"/>
              <Avatar  email="uyen@gmail.com" color="cyan" size="medium" name="N"/>
            </div>
          </header>
          {/* Show mess part*/}
          <section className="chatbox__content">
          <ChatLine type="send" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit perferendis explicabo quos, quasi recusandae vel, officiis veniam nisi laudantium aut, hic temporibus totam? Molestias repellendus saepe illo magnam in ipsa!"/>
                <ChatLine type="receive" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit perferendis explicabo quos, quasi recusandae vel, officiis veniam nisi laudantium aut, hic temporibus totam? Molestias repellendus saepe illo magnam in ipsa!"/>
                <ChatLine type="send" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit perferendis explicabo quos, quasi recusandae vel, officiis veniam nisi laudantium aut, hic temporibus totam? Molestias repellendus saepe illo magnam in ipsa!"/>
                <ChatLine type="receive" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit perferendis explicabo quos, quasi recusandae vel, officiis veniam nisi laudantium aut, hic temporibus totam? Molestias repellendus saepe illo magnam in ipsa!"/>
            
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