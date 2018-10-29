import React, { Component } from 'react';
import ClientContainer from '../../containers/ClientContainer/ClientContainer';
import ClientChatButton from '../../components/elements/ClientChatButton/ClientChatButton';
import ClientChatBox from '../../components/elements/ClientChatBox/ClientChatBox';
import ClientSignUpForm from '../../components/elements/ClientSignUpForm/ClientSignUpForm';


class ClientPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isDisplayChat: false,
            userInStore: {},
            currentUser: {},
            currentRoom:{}
        }
    }
    componentDidMount() {
        let userInStore = JSON.parse(localStorage.getItem('client'));
        if (userInStore)
        {    this.setState({
                isDisplayChat: true,
                userInStore: userInStore
            })
        }
    }

    //Các hàm lấy giá trị từ con
    getState = (isDisplayChat) => {
        if (isDisplayChat)
            this.setState({
                isDisplayChat: isDisplayChat
            })
    }

    render() {
        let { isDisplayChat } = this.state;
        
        return (
            <ClientContainer>
                <ClientChatButton />
                {isDisplayChat ? 
                <ClientChatBox currentUser={this.state.currentUser}/> : 
                <ClientSignUpForm isDisplayChat={this.getState} />}
            </ClientContainer>
        );
    }
}

export default ClientPage;