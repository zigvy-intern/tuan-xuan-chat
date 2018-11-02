import React, { Component } from 'react';
import Inbox from '../Inbox/Inbox';

class InboxList extends Component {


    render() {
        let orderedRooms = [...this.props.rooms];

        return (
            <div className="inbox-container">
                {
                    orderedRooms.map(room => {
                        //add class active khi subscribe 1 phòng
                        const active = this.props.currentRoom === room.id ? "active" : "";
                        console.log(room)
                        return (
                            <Inbox
                                createdByUserId={room.createdByUserId}
                                time={room.updatedAt}
                                sender={room.name}
                                className={"border-box inbox " + active}
                                key={room.id}
                                email={room.name}
                                inboxContent=""
                                onClick={() => this.props.subscribeToRoom(room.id)}
                            />
                        )
                    })

                }
            </div>
        );
    }
}

export default InboxList;