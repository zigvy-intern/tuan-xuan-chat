import React, { Component } from 'react';
import ChatLine from '../ChatLine/ChatLine';
import ReactDOM from 'react-dom';

class ChatContent extends Component {
    state = {  }
    
    componentWillUpdate() {
        const node = ReactDOM.findDOMNode(this)
        this.shouldScrollToBottom = node.scrollTop + node.clientHeight + 100 >= node.scrollHeight
    }
    
    componentDidUpdate() {
        if (this.shouldScrollToBottom) {
            const node = ReactDOM.findDOMNode(this)
            node.scrollTop = node.scrollHeight   
        }
    }

    render() { 
        
        return ( 
            <section className="chatbox__content">
            {/* <ChatLine key="1" type="send" time="1 hour" content="Hello, may I help you?" sender="K" currentUser="X"/> */}
            {
                this.props.messages.map((mess,index) =>
                {
                    return(
                    <ChatLine key={index} type="send" time={mess.createdAt} content={mess.text} sender={mess.sender} currentUser={this.props.currentUser}
                    />
                    
                    )
                })
            }   
            {this.props.children}
            </section>
         );
    }
}
 
export default ChatContent;