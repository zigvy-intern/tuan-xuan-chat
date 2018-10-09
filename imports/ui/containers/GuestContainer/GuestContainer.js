import React, { Component } from 'react';
import Inbox from '../../components/elements/Inbox/Inbox';

class GuestContainer extends Component {
    state = {  }
    renderInboxList()
    {
        let inboxList =[
            {id:Math.random(), sender:'X', receiver:"H", email:"tranxuan.1096@gmail.com", time:"300 days", content:"Hello, long time no see"},
            {id:Math.random(), sender:'X', receiver:"T", email:"quoctuanit.1096@gmail.com", time:"30 mins", content:"How are you today?"},
            {id:Math.random(), sender:'X', receiver:"H", email:"thanhhang@gmail.com", time:"now", content:"Lend me back my books"},
            {id:Math.random(), sender:'X', receiver:"A", email:"phuonganh@gmail.com", time:"1 day", content:'I dont have money!'},
            {id:Math.random(), sender:'X', receiver:"H", email:"tranxuan.1096@gmail.com", time:"300 days", content:"Hello, long time no see"},
            {id:Math.random(), sender:'X', receiver:"T", email:"quoctuanit.1096@gmail.com", time:"30 mins", content:"How are you today?"},
            {id:Math.random(), sender:'X', receiver:"H", email:"thanhhang@gmail.com", time:"now", content:"Lend me back my books"},
            {id:Math.random(), sender:'X', receiver:"A", email:"phuonganh@gmail.com", time:"1 day", content:'I dont have money!'},
            {id:Math.random(), sender:'X', receiver:"H", email:"tranxuan.1096@gmail.com", time:"300 days", content:"Hello, long time no see"},
            {id:Math.random(), sender:'X', receiver:"T", email:"quoctuanit.1096@gmail.com", time:"30 mins", content:"How are you today?"},
            {id:Math.random(), sender:'X', receiver:"H", email:"thanhhang@gmail.com", time:"now", content:"Lend me back my books"},
            {id:Math.random(), sender:'X', receiver:"A", email:"phuonganh@gmail.com", time:"1 day", content:'I dont have money!'},
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
            <div className="info border-box">
                    {/* Add */}
                    <section className="grid-row border-bottom">
                        <a className="avatar avatar--medium bgr-yellow" href="#"> H</a>
                        <input className="text-box" type="text" placeholder="Type a name and hit Enter" />
                    </section>
                    {/* Detail */}
                    <section className="info__detail border-bottom">
                        <p>Name<span>luuminhtan123@gmail.com</span></p>
                        <p>Location<span>Ho Chi Minh city, Vietnam</span></p>
                        <p>Email<span>luuminhtan123@gmail.com</span></p>
                        <p>First seen<span>0:00 23/03/2016</span></p>
                        <p>Last seen<span>0:00 23/03/2016</span></p>
                        <p>Web sessions<span>10</span></p>
                    </section>
                    {/* Option */}
                    <section className="info__option">
                        <button className="btn btn--red btn--large">Delete this person</button>
                        <button className="btn btn--yellow btn--large">Block this person</button>
                        <button className="btn btn--blue btn--large">Unsubcribe from email</button>
                    </section>
             </div>
            <div className="inbox-container" data-simplebar>
                {this.renderInboxList()}

            </div>
            </React.Fragment>
         );
    }
}
 
export default GuestContainer;