import React, { Component } from 'react';
import Button from '../Button/Button';

class InputBox extends Component {
    state = {  }
    constructor() {
        super()
        this.state = {
            message: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.onEnterPress= this.onEnterPress.bind(this)
    }
    
    handleChange(e) {
        this.setState({
             message: e.target.value
        })

    }
    
    handleSubmit(e) {
        //khi form submit sẽ chạy sendMess gửi từ Container xuống
        e.preventDefault()
        this.props.sendMessage(this.state.message)
        this.setState({
        message: ''
   })
    }
    onEnterPress = (e) => {
        if(e.keyCode == 13 && e.shiftKey == false) {
          this.handleSubmit(e)
        }
      }
    render() { 
        let tab=null;
        if (this.props.tab=="1")
        {
            tab=<header className="chat__tab">
            <ul>
                <li className="active-tab"><a>Reply</a></li>
                <li><a >Note</a></li>
            </ul>
            </header>
        }
        return ( 
            <React.Fragment>
            <section className="chatbox__input">
            
                {/* Features */}
                {tab}
                {/* Input space */}
                <form onSubmit={this.handleSubmit} id="sendmess">
                <textarea
                 onKeyDown={this.onEnterPress}
                 onChange={this.handleChange}
                 className="chat__text-box" type="text" placeholder="Enter your message here" 
                 value={this.state.message} />
                {/* More input options */}
                <footer className="chat__option">
                <ul>
                    <li><a >Aa</a></li>
                    <li><a className="icon-attachment" /></li>
                    <li><a className="icon-picture" /></li>
                    <li><a className="icon-emoji" /></li>
                </ul>
               <Button size="small" color={this.props.btnColor ? this.props.btnColor : "cyan"} name="Send"/>
             </footer>
             </form>
            </section>
            </React.Fragment>
         );
    }
}
 
export default InputBox;