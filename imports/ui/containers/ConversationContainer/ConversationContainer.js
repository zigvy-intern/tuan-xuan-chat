import React, { Component } from 'react';
import Inbox from '../../components/elements/Inbox/Inbox';
import ChatBox from '../../components/elements/ChatBox/ChatBox';
import InfoBox from '../../components/elements/InfoBox/InfoBox';


class ConversationContainer extends Component {
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
            <div className="inbox-container" data-simplebar>
             {this.renderInboxList()}
            </div>
            <ChatBox/>
            <InfoBox/>
            </React.Fragment>
         );
    }
}
 
export default ConversationContainer;