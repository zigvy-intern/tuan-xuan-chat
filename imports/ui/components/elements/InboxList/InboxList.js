import React, { Component } from 'react';
import Inbox from '../Inbox/Inbox';
class InboxList extends Component {

    render() { 
        const orderedRooms = [...this.props.rooms].sort((a, b) => a.createdAt - b.createdAt)
        return ( 
            <div className="inbox-container">
            {
               orderedRooms.map(room=>{
                const active = this.props.currentRoom === room.id ? "active" : "";
                    return(
                        <Inbox 
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