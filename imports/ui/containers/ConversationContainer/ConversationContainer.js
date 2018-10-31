import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor'
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
            currentUser: {},
            currentRoom: '',
            joinableRooms: [],
            joinedRooms: [],
            users: []
        }
    }

    componentDidMount() {
        if(Meteor.user())
        {
        localStorage.setItem('admin', JSON.stringify(Meteor.user()));

        }
        let userInStore = JSON.parse(localStorage.getItem('admin'))
        console.log(userInStore)
        this.connectToChatKit(userInStore.username)
    }
    connectToChatKit = (id) => {
        const chatManager = new Chatkit.ChatManager({
            instanceLocator,
            userId: id, /*ID của user vô đây*/
            tokenProvider: new Chatkit.TokenProvider({
                url: tokenUrl
            })
        })

        chatManager.connect()
            .then(currentUser => {
                console.log("Connected")
                this.setState({
                    currentUser: currentUser
                })
                this.getRooms()



            })
            .catch(err => console.log('Error on connecting: ', err))
    }
    // shouldComponentUpdate(nextProps, nextState) {
    //     return true
    //   }

    //   componentWillUpdate(nextProps, nextState) {
    //     this.getRooms()
    //     // console.log("Re-render room list")
    // }
    getRooms = () =>{
        //Lấy tất cả các phòng của user này
        let { currentUser } = this.state
        if (currentUser) {
            currentUser.getJoinableRooms()
                .then(joinableRooms => {
                    this.setState({
                        joinableRooms,
                        joinedRooms: currentUser.rooms
                    })
                })
                .catch(err => console.log('error on joinableRooms: ', err))
        }
    }


    subscribeToRoom = (roomId) => {
        // alert(roomId)
        // Theo dõi data từ 1 room
        // Xóa toàn bộ mess khi chuyển room
        this.setState({ messages: [] })
        let { currentUser } = this.state
        currentUser.subscribeToRoom({
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
                    room: room,
                    currentRoom: room.id
                })
                this.getRooms()
            })
            .catch(err => console.log('error on subscribing to room: ', err))

    }

    sendMessage = (text) => {
        let { currentUser, currentRoom } = this.state
        currentUser.sendMessage({
            text,
            roomId: currentRoom
        })
    }

    render() {

        return (
            <React.Fragment>
                <InboxList currentUser={this.state.currentUser}
                    currentRoom={this.state.currentRoom}
                    rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]}
                    subscribeToRoom={this.subscribeToRoom}
                />
                <ChatBox messages={this.state.messages}
                    currentUser={this.state.currentUser}
                    sendMessage={this.sendMessage}
                    currentRoom={this.state.currentRoom}
                />
                <InfoBox />
            </React.Fragment>
        );
    }
}

export default ConversationContainer;