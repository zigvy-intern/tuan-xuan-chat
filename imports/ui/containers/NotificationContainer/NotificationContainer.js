import React, { Component } from 'react';
import Chart from '../../components/elements/Chart/Chart';

class NotificationContainer extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="inbox-container">


            </div>
            <div className="noti-right-container">
                <div className="chart-container">
                    <Chart/>

                </div>
                <div className="chatroom-container">


                </div>
                <div className="activities-container">
                
                </div>

            </div>
           
         );
    }
}
 
export default NotificationContainer;