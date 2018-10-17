import React, { Component } from 'react';
import Inbox from '../Inbox/Inbox';
class InboxList extends Component {
    constructor()
    {
        super()
    }
    render() { 
        // const rooms=[...this.state.joinableRooms, ...this.state.joinedRooms];
        return ( 
            <div className="inbox-container">
                   {/* <ul>
                     <h3>Your rooms:</h3>
                    {rooms.map(room => {
                        return (
                            <li key>
                                <a href="#"># {room.name}</a>
                            </li>
                        )
                    })}
                </ul> */}
            </div>
         );
    }
}
 
export default InboxList;