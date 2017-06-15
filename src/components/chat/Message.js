import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Chat.css';
import { connect } from 'react-redux';

class Message extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { onMessageSuicide } = this.props;
    this.suicide = setTimeout(() => {
      onMessageSuicide();
    }, 10000);
  }

  render() {
    const { message } = this.props;
  
    return (
      <div className={styles.message}>
        <div>
          <span>{message.sender.username}</span>
          <span>{message.receivedTime}</span>
        </div>
        <div>{message.content}</div>
      </div>
    );
  }
}

Message.propTypes = {
  message: PropTypes.shape({
    sender: PropTypes.shape({
      username: PropTypes.string.isRequired,
    }),
    content: PropTypes.string,
    receivedTime: PropTypes.string.isRequired,
  }),
};



export default Message;