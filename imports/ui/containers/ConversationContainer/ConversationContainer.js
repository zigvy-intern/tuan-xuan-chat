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
            user:{}
        }
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
                this.state.user=currentUser
                currentUser.subscribeToRoom({
                    roomId: 18698926, /** swap out */
                    hooks: {
                        onNewMessage: message => {
                            this.setState({
                                messages: [...this.state.messages, message]
                            })
                        }
                    }
                })
            })
    }

    // sendMessage(text)
    // {
    //     this.state.user.sendMessage({
    //         text,
    //         roomId:18698926
    //     })
    // }
    render() {

        return (
            <React.Fragment>
                <InboxList currentUser={this.state.user}/>
                <ChatBox messages={this.state.messages} currentUser={this.state.user}
                />
                <InfoBox />
            </React.Fragment>
        );
    }
}

export default ConversationContainer;