import React, { Component } from 'react';
import Inbox from '../Inbox/Inbox';
import {Clients} from '../../../../api/clients/clients'
class InboxList extends Component {

    getColor = (id) =>
    {
        let user= Clients.findOne({_id:id})
        if(user)
        return user.avatarColor
    }

    render() {
        let orderedRooms = [...this.props.rooms];

        return (
            <div className="inbox-container">
                {
                    orderedRooms.map(room => {
                        //add class active khi subscribe 1 phòng
                        const active = this.props.currentRoom === room.id ? "active" : "";
                        const color = this.getColor(room.createdByUserId)
                        return (
                            <Inbox
                                avatarColor={color? color : "red"}
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