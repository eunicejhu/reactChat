import React, { Component } from 'react';
import styles from './Chat.css';
import Profile from './Profile';
import MemberList from './MemberList';
import MessagesPanel from './MessagesPanel';
import ComposePanel from './ComposePanel';
import { connect } from 'react-redux';
import { updateMembers, receiveMessage } from '../../actions';
import { withRouter } from 'react-router';

const mapStateToProps = (state) => ({
  user: state.user,
  socket: state.socket,
});
const mapDispatchToProps = (dispatch) => ({
  onUpdateMembers(members) {
    dispatch(updateMembers(members));
  },
  onReceiveMessage(message) {
    dispatch(receiveMessage(message));
  },
});
class Chat extends Component {
  componentDidMount() {
    const { user, onUpdateMembers, onReceiveMessage, socket } = this.props;
    console.log('socket in Chat from Home: ', socket);
    socket.emit('enter room', user);
    socket.on('update members', (members) => {
      console.log('members', members);
      onUpdateMembers(members);
    });
    socket.on('receive message', (message) => {
      console.log('message: ', message);
      onReceiveMessage(message);
    });
  }
  render() {
    return (
      <div className={styles.wrapper}>
        <section className={styles.chatRoomInfo}>
          <Profile />
          <MemberList />
        </section>
        <section className={styles.chatSpace}>
          <MessagesPanel />
          <ComposePanel />
        </section>
      </div>
    );
  }
}
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Chat));