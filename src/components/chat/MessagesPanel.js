import React, { Component } from 'react';
import styles from './Chat.css';
import Message from './Message';
import { connect } from 'react-redux';
import getNow from '../../utils/getNow';

const mapStateToProps = (state) => ({message: state.message});

class MessagesPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
    this.onMessageSuicide = this.onMessageSuicide.bind(this);
  }
  componentWillMount() {
    const { message } = this.props;
    this.setState(preState => ({
      messages: [
        ...preState.messages,
        {
          ...message,
          receivedTime: getNow(),
        },
      ],
    }));
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      messages: [
        ...this.state.messages, 
        {
          ...nextProps.message,
          receivedTime: getNow(),
        },
      ],
    });
  }

  onMessageSuicide() {
    this.setState(preState => ({
      messages: preState.messages.slice(1),
    }));
  }

  render() {
    const { messages } = this.state;
    return (
      <div ref={(node) => { this.messagesPanel = node;}} className={styles.messagesPanel}>
        {
          messages.map((message, index) => <Message 
            key={index}
            onMessageSuicide={this.onMessageSuicide} 
            message={message} />)
        }
      </div>
    );
  }
}

export default connect(mapStateToProps)(MessagesPanel);