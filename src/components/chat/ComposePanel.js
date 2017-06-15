import React, { Component } from 'react';
import styles from './Chat.css';
import { sendMessage } from '../../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  user: state.user,
});
const mapDispatchToProps = (dispatch) => ({
  onSendMessage(message) {
    dispatch(sendMessage(message));
  },
});
class ComposePanel extends Component {
  constructor(props) {
    super(props);
    this.onSubmitMessage = this.onSubmitMessage.bind(this);
  }

  onSubmitMessage(e) {
    const { onSendMessage, user } = this.props;
    const { socket } = user;
    const key = e.keyCode;
    const messageValue = this.message.value;
    if (messageValue.trim().length && key === 13) {
      const message = {
        sender: user,
        content: this.message.value,
      };
      // user will display his own message
      onSendMessage(message);
      // server will broadcast to other members
      socket.emit('send message', message);
      this.message.value = '';
      return false;
    } 
    return true;
  }

  render() {
    return (
      <form onSubmit={(e) => {e.preventDefault();}} autoComplete="off"  className={styles.composePanel}>
        <input 
          onKeyDown={this.onSubmitMessage}
          ref={node => {this.message = node;}} 
          className={styles.composeInput}  />
        <button 
          onClick={this.onSubmitMessage}
          className={styles.submit}>Send</button>
      </form>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ComposePanel);