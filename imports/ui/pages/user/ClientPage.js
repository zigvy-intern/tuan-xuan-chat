import React, { Component } from 'react'; 
import ClientContainer from '../../containers/ClientContainer/ClientContainer';
import ClientChatButton from '../../components/elements/ClientChatButton/ClientChatButton';
import ClientChatBox from '../../components/elements/ClientChatBox/ClientChatBox';
import ClientSignUpForm from '../../components/elements/ClientSignUpForm/ClientSignUpForm';

class ClientPage extends Component {
    state = {  }
    render() { 
        return ( 
            <ClientContainer>
                <ClientChatButton/>
                <ClientChatBox/>
                <ClientSignUpForm/>

            </ClientContainer>
         );
    }
}
 
export default ClientPage;