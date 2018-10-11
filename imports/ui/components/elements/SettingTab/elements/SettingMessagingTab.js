import React, { Component } from 'react';

class SettingMessagingTab extends Component {
    state = {  }
    render() { 
        return ( 
        <section id="messaging" className="tab-detail border-box" style={{display: 'inherit'}}>
            <section className="border-bottom">
                <header className="border-left-box border--blue ">
                <p className="border-left__title">Begin new message</p>
                </header>
                <form className="form-group">
                <input type="text" className="text-box--white" defaultValue="Hi {{first name}} !" />
                </form>
            </section>
            <section className="border-bottom">
                <header className="border-left-box border--yellow">
                <p className="border-left__title">MESSAGE RESPONDER FOR WEB</p>
                </header>
                <form className="checkbox-wrap">
                <input className="check-box" type="checkbox" name="checkbox" id="checkbox_id" defaultValue="value" />
                <label htmlFor="checkbox_id">Automatically show a response when someone asks a question
                </label>
                </form>
                <form>
                <textarea className="text-box--white" cols={30} rows={5} defaultValue={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."} />
                </form>
            </section>
            <section className="border-bottom">
                <header className=" border-left-box border--pink">
                <p className="border-left__title">Ask email</p>
                </header>
                <form className="form-group">
                <input type="text" className="text-box--white" />
                </form>
            </section>
            <section>
                <header className=" border-left-box border--blue">
                <p className="border-left__title">Ask phone number</p>
                </header>
                <form className="form-group">
                <input type="text" className="text-box--white" />
                </form>
            </section>
            </section>

         );
    }
}
 
export default SettingMessagingTab;