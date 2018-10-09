import React, { Component } from 'react';
import Chart from '../../components/elements/Chart/Chart';
import ChatRoom from '../../components/elements/ChatRoom/ChatRoom';
import ActivitiesBox from '../../components/elements/ActivitiesBox/ActivitiesBox';
import Inbox from '../../components/elements/Inbox/Inbox';

class NotificationContainer extends Component {
    state = {  }
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
            <div className="inbox-container">
                {this.renderInboxList()}

            </div>
            <div className="noti-right-container">
                <div className="chart-container">
                    <Chart/>

                </div>
                <div className="chatroom-container">
                    <ChatRoom/>

                </div>
                <div className="activities-container">
                    <ActivitiesBox/>
                </div>

            </div>
           </React.Fragment>
         );
    }
}
 
export default NotificationContainer;