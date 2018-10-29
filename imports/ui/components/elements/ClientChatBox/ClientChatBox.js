import React, { Component } from 'react';
import ChatContent from '../ChatContent/ChatContent';
import InputBox from '../InputBox/InputBox';
import Chatkit from '@pusher/chatkit';
import { tokenUrl, instanceLocator } from '../../../../api/chatkit/clientobj'
class ClientChatBox extends Component {

    componentDidMount()
    {
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
                        currentUser:currentUser
                    })
                    let clientRoom = JSON.parse(localStorage.getItem('room'))
                    if(!clientRoom)
                       this.createRoomOnChatKit()
                })
                .catch(err => console.log('Error on connecting: ', err))
        }
    
        createRoomOnChatKit()
        {
            console.log(this.state.currentUser)
            let {currentUser} = this.state
            currentUser.createRoom({
                    name: currentUser.customData.email,
                    private: false,
                  }).then(room => {
                    let clientRoom ={
                        id:room.id,
                        name: room.name
                    }
                    console.log(`Created room called ${room.name}`)
                    localStorage.setItem('room', JSON.stringify(clientRoom));
                  })
                  .catch(err => {
                    console.log(`Error creating room ${err}`)
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
                    <ChatContent />
                    {/* Chat input & option */}
                    <InputBox
                        // currentUser={this.props.currentUser}
                        // sendMessage={this.props.sendMessage}
                        btnColor="blue"
                    />
                </div>
            </div>

        );
    }
}

export default ClientChatBox;