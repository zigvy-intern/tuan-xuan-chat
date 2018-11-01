import React, { Component } from 'react';
import ChatContent from '../ChatContent/ChatContent';
import InputBox from '../InputBox/InputBox';
import Chatkit from '@pusher/chatkit';
import { tokenUrl, instanceLocator } from '../../../../api/chatkit/clientobj'
class ClientChatBox extends Component {
    constructor() {
        super()
        this.state = {
            currentUser:{},
            messages:[]
        }
    }
    componentDidMount() {
        let userInStore = JSON.parse(localStorage.getItem('client'))
        this.connectToChatKit(userInStore.id)
    }
    //Các hàm tác động đến chatkit
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
                let clientRoom = JSON.parse(localStorage.getItem('room'))
                if (!clientRoom)
                {
                    this.createRoomOnChatKit()
                   
                }
                else
                    this.subscribeToRoom(clientRoom.id)
            })
            .catch(err => console.log('Error on connecting: ', err))
    }

    createRoomOnChatKit() {
        let { currentUser } = this.state
        currentUser.createRoom({
            name: currentUser.customData.email,
            private: false,
        }).then(room => {
            let clientRoom = {
                id: room.id,
                name: room.name
            }
            localStorage.setItem('room', JSON.stringify(clientRoom));
            this.subscribeToRoom(room.id)
        })
            .catch(err => {
                console.log(`Error creating room ${err}`)
            })
    }
    subscribeToRoom = (roomId) => {
        // alert(roomId)
        // Theo dõi data từ 1 room
        // Xóa toàn bộ mess khi chuyển room
        let { currentUser } = this.state
        this.setState({ messages: [] })
        currentUser.subscribeToRoom({
            roomId, //bằng với ID phòng truyền vào
            hooks: {
                onNewMessage: message => {
                    this.setState({
                        messages: [...this.state.messages, message]
                    })
                }
            }
        })
        console.log("Subscribed!")
    }
    sendMessage = (text) => {
        let { currentUser } = this.state
        let clientRoom = JSON.parse(localStorage.getItem('room'))

        currentUser.sendMessage({
            text,
            roomId:clientRoom.id
        })
    }
    render() {
        return (
            <div className="client-chatbox">
                <header className="client-signup__header bgr-pink">
                    <p>Chatroom</p>
                    <div className="minimal-line" />
                </header>
                <div className="client-chatbox__container">
                    <ChatContent messages={this.state.messages}
                        currentUser={this.state.currentUser}
                    />
                    {/* Chat input & option */}
                    <InputBox
                        currentUser={this.state.currentUser}
                        sendMessage={this.sendMessage}
                        btnColor="blue"
                    />
                </div>
            </div>

        );
    }
}

export default ClientChatBox;