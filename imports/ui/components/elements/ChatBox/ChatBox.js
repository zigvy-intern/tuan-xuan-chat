import React, { Component } from 'react';
import Button from '../Button/Button';
import ChatLine from '../ChatLine/ChatLine';

class ChatBox extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
        <div className="chatbox-container chatbox border-box">
            <header className="chatbox-header">
                <div className="chatbox-header__main bold">
                tquoctuan@gmail.com
                </div>
                <div className="chatbox-header__right" onClick="openInfo()">
                <i className="fas fa-ellipsis-h" />
                </div>
            </header>
            {/* Show mess part*/}
            <section className="chatbox__content">
                <ChatLine type="send"/>
                <ChatLine type="receive"/>
                
            </section>
            {/* Chat input & option */}
            <section className="chatbox__input">
                {/* Features */}
                <header className="chat__tab">
                <ul>
                    <li className="active-tab"><a href>Reply</a></li>
                    <li><a href>Note</a></li>
                </ul>
                </header>
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
                <Button size="small" color="cyan" name="Send"/>
                </footer>
            </section>
            </div>

            </React.Fragment>
         );
    }
}
 
export default ChatBox;