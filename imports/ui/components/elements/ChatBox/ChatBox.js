import React, { Component } from 'react';
import Button from '../Button/Button';
import ChatLine from '../ChatLine/ChatLine';
import InputBox from '../InputBox/InputBox';

class ChatBox extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
        <div className="chatbox-container chatbox border-box">
            <header className="chatbox-header">
                <div className="chatbox-header__main bold">
                {this.props.email}
                </div>
                <div className="chatbox-header__right">
                <i className="fas fa-ellipsis-h" />
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
            <InputBox tab="1"/>
            </div>

            </React.Fragment>
         );
    }
}
 
export default ChatBox;