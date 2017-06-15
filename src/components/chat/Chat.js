import React, { Component } from 'react';
import styles from './Chat.css';
import Profile from './Profile';
import MemberList from './MemberList';
import MessagesPanel from './MessagesPanel';
import ComposePanel from './ComposePanel';
import { connect } from 'react-redux';
import { updateMembers } from '../../actions';
import { withRouter } from 'react-router';
// import io from 'socket.io-client';
// import {SOCKET_PATH, SOCKET_HOST} from '../../utils/constants';
// const socket = io.connect( SOCKET_HOST, {path: SOCKET_PATH});

const mapStateToProps = (store) => ({
  user: store.state,
});
const mapDispatchToProps = (dispatch) => ({
  onUpdateMembers(members) {
    dispatch(updateMembers(members));
  },
});
class Chat extends Component {

  componentDidMount() {
    const { user, onUpdateMembers } = this.props;
    socket.emit('enter room', user);
    socket.on('update members', (members) => {
      onUpdateMembers(members);
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