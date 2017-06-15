import React, { Component } from 'react';
import styles from './Home.css';
import { enterRoom } from '../../actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import io from 'socket.io-client';
import {SOCKET_PATH, SOCKET_HOST} from '../../utils/constants';

const mapStateToProps = (state) => ({
});
const mapDispatchToProps = (dispatch) => ({
  onEnterRoom(username, socket) {
    dispatch(enterRoom(username, socket));
  },
});
class Home extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.input.focus();
  }

  onSubmit() {
    const { onEnterRoom, history } = this.props;
    const inputUserName = this.input.value;
    const socket = io.connect( SOCKET_HOST, {path: SOCKET_PATH});
    inputUserName.trim().length && onEnterRoom(inputUserName, socket);
    history.push('/chat');
  }

  render() {
    return (
      <div className={styles.home}>
        <form onSubmit={(e) => {e.preventDefault();}} autoComplete="off">
          <label htmlFor="username">Input your name</label>
          <input 
            ref={(node) => {this.input = node;}} 
            className={styles.username} 
            name="username" 
            placeholder="Isabella" 
            type="text"/>
          <button 
            className={styles.submit} 
            onClick={this.onSubmit}>Enter Chat Room
          </button>
        </form>
      </div>
    );
  }
}
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));