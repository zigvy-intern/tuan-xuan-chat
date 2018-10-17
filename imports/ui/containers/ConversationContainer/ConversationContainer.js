import React, { Component } from 'react';
import Inbox from '../../components/elements/Inbox/Inbox';
import ChatBox from '../../components/elements/ChatBox/ChatBox';
import InfoBox from '../../components/elements/InfoBox/InfoBox';
import InboxList from '../../components/elements/InboxList/InboxList';
import Chatkit from '@pusher/chatkit'
import { tokenUrl, instanceLocator } from './config'
class ConversationContainer extends Component {
    constructor() {
        super()
        this.state = {
            messages: [],
            user: {},
            currentRoom:'',
            joinableRooms: [],
            joinedRooms: []
        }
        this.subscribeToRoom = this.subscribeToRoom.bind(this)
        this.getRooms= this.getRooms.bind(this)
        this.sendMessage=this.sendMessage.bind(this)
    }

    componentDidMount() {
        const chatManager = new Chatkit.ChatManager({
            instanceLocator,
            userId: 'xuanne', /** swap out */
            tokenProvider: new Chatkit.TokenProvider({
                url: tokenUrl
            })
        })

        chatManager.connect()
            .then(currentUser => {
                //Gán user vào state
                this.state.user = currentUser
                this.currentUser = currentUser
                //Lấy tất cả các phòng chat
                this.getRooms()
               
            })
            .catch(err => console.log('error on connecting: ', err))
    }

    getRooms()
    {
        //Lấy tất cả các phòng của user này
        this.currentUser.getJoinableRooms()
                .then(joinableRooms => {
                    this.setState({
                        joinableRooms,
                        joinedRooms: this.currentUser.rooms
                    })
                })
                .catch(err => console.log('error on joinableRooms: ', err))
    }


    subscribeToRoom(roomId) {
        // alert(roomId)
        // Theo dõi data từ 1 room
        // Xóa toàn bộ mess khi chuyển room
        this.setState({ messages: [] })
        this.currentUser.subscribeToRoom({
            roomId, //bằng với ID phòng truyền vào
            // limit: 10, //giới hạn số lượng mess của currentUser dc load
            hooks: {
                onNewMessage: message => {
                    this.setState({
                        messages: [...this.state.messages, message]
                    })
                }
            }
        })

        //Update từ phòng chưa join thành đã join
        .then(room => {
            //Lưu id phòng hiện tại
            this.setState({
                currentRoom:room.id
            })
            this.getRooms()
        })
        .catch(err => console.log('error on subscribing to room: ', err))

    }

    sendMessage(text)
    {
        this.state.user.sendMessage({
            text,
            roomId:this.state.currentRoom
        })
    }
    render() {
        return (
            <React.Fragment>
                <InboxList currentUser={this.state.user}
                currentRoom={this.state.currentRoom}
                rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]}
                subscribeToRoom={this.subscribeToRoom}
                 />
                <ChatBox messages={this.state.messages} currentUser={this.state.user}
                        sendMessage={this.sendMessage}
                />
                <InfoBox />
            </React.Fragment>
        );
    }
}

export default ConversationContainer;