import React, { Component } from 'react';

class InputBox extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>>
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
            </React.Fragment>
         );
    }
}
 
export default InputBox;