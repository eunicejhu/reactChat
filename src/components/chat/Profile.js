import React from 'react';
import styles from './Chat.css';
import { leaveRoom } from '../../actions';

import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
  return  {
    user: state.user,
  };
};
const mapDispatchToProps = (dispatch) => ({
  onLeaveRoom(id, history) {
    dispatch(leaveRoom(id));
    history.push('/');
  },
});
const Profile = (props) => {
  const { user, onLeaveRoom, history } = props;
  return (
    <div className={styles.user}>
      <span>{user.username}</span>
      <a onClick={() => onLeaveRoom(user.id, history)}>Leave Room</a>
    </div>
  );
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));