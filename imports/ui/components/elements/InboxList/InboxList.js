import React, { Component } from 'react';
import Inbox from '../Inbox/Inbox';
class InboxList extends Component {


    render() { 
        let orderedRooms = [...this.props.rooms].sort((a, b) => b.updatedAt - a.updatedAt)
        
        return ( 
            <div className="inbox-container">
            {
               orderedRooms.map(room =>
               {
                //add class active khi subscribe 1 phòng
                const active = this.props.currentRoom === room.id ? "active" : "";
                
                    return(
                        <Inbox
                        time={room.updatedAt}
                        sender={room.name} 
                        className={"border-box inbox "+active}
                        key={room.id} 
                        email={room.name} 
                        inboxContent={room.id}
                        onClick={()=>this.props.subscribeToRoom(room.id)}
                        />
                    )
                })
               
            }
            </div>
         );
    }
}
 
export default InboxList;