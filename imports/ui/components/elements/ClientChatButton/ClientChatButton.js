import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as acitons from './../../../actions/index';
class ClientChatButton extends Component {
    state = {}

    onTogglePopup = () => {
        this.props.onTogglePopup();
    }

    render() {
        return (
            <div className="client-chat-btn" onClick={this.onTogglePopup}>
                <img src="./assets/img/SVG/conversation.svg" alt="true" />
            </div>);
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      onTogglePopup: () => {
        dispatch(acitons.togglePopup());
      }
    };
}

export default connect(null, mapDispatchToProps)(ClientChatButton);