import React, { Component } from 'react';
import Inbox from '../Inbox/Inbox';
class InboxList extends Component {

    render() { 
        const orderedRooms = [...this.props.rooms].sort((a, b) => a.createdAt - b.createdAt)
        return ( 
            <div className="inbox-container">
            {
               orderedRooms.map(room=>{
                    return(
                        <Inbox key={room.id} 
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