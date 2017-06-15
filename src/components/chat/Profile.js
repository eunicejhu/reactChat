import React from 'react';
import styles from './Chat.css';

import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const mapStateToProps = (state) => {
  return  {
    user: state.user,
    socket: state.socket,
  };
};
const mapDispatchToProps = (dispatch) => ({
  onLeaveRoom(id, history, socket) {
    socket.emit('end');
    history.push('/');
  },
});
const Profile = (props) => {
  const { user, onLeaveRoom, history, socket } = props;
  return (
    <div className={styles.user}>
      <span>{user.username}</span>
      <a onClick={() => onLeaveRoom(user.id, history, socket)}>Leave Room</a>
    </div>
  );
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));