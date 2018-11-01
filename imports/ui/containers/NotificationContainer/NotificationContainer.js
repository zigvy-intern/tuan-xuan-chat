import React, { Component } from 'react';
import Chart from '../../components/elements/Chart/Chart';
import ChatRoom from '../../components/elements/ChatRoom/ChatRoom';
import ActivitiesBox from '../../components/elements/ActivitiesBox/ActivitiesBox';
import Inbox from '../../components/elements/Inbox/Inbox';

class NotificationContainer extends Component {
    state = {  }

    render() { 
        return ( 
            <React.Fragment>
            <div className="inbox-container">
            <div className="border-box inbox inbox--unread">
                <p className="bold">UNREAD MESSAGE</p>
                <span className="inbox__noti">10</span>
            </div>
             

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