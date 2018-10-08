import React, { Component } from 'react';
import Inbox from '../../components/elements/Inbox/Inbox';
import FormInput from '../../components/elements/FromInput/FromInput';
class MemberContainer extends Component {
    state = { 
        
     }
    renderInboxList()
    {
        let inboxList =[
            {id:1, sender:'X', receiver:"H", email:"tranxuan.1096@gmail.com", time:"300 days", content:"Hello, long time no see"},
            {id:2, sender:'X', receiver:"T", email:"quoctuanit.1096@gmail.com", time:"30 mins", content:"How are you today?"},
            {id:3, sender:'X', receiver:"H", email:"thanhhang@gmail.com", time:"now", content:"Lend me back my books"},
            {id:4, sender:'X', receiver:"A", email:"phuonganh@gmail.com", time:"1 day", content:'I dont have money!'},
        ];
        
         const list= inboxList.map(inbox =>
                <Inbox
                id={inbox.id}
                sender={inbox.sender}
                receiver={inbox.receiver}
                email={inbox.email}
                time={inbox.time}
                inboxContent={inbox.content}/>
            );
      return list;
      
    }
    render() { 
        return ( 
            <React.Fragment>
            <div className="info">
            <div className="avatar avatar--extra-large bgr-blue" />
            <section className="info-user border-box">
            <FormInput placeholder="First name" value=""/>
            <FormInput placeholder="Last name" value=""/>
            </section>
            <form className="border-box">
                <div className="border-bottom">
                <div className="info-user">
                    <p className="form__label">Change password</p>
                    <FormInput type="password" placeholder="Current password" value="" required/>
                    <FormInput type="password" placeholder="New password" value="" required/>
                    <FormInput type="password" placeholder="Confirm new password" value="" required/>
                </div>
                </div>
                <section className="info-user info__option">
                <button type="submit" className="btn btn--cyan btn--large">Update</button>
                <button type="reset" className="btn btn--gray btn--large">Cancel</button>
                </section>
            </form>
            </div>

            <div className="inbox-container">
                {/* <Inbox 
                sender="X"
                receiver="H"
                email="tranxuan.1096@gmail.com"
                time="5 days"
                inboxContent="Hello it's me, i was wondering if after all this year you like to meet"/> */}
                {this.renderInboxList()}
            </div>
            </React.Fragment>
         );
    }
}
 
export default MemberContainer;