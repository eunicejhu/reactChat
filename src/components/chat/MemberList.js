import React from 'react';
import styles from './Chat.css';
import * as _ from 'lodash';
import { connect } from 'react-redux';
import {FaHeart, FaHeartO} from 'react-icons/lib/fa';

const getFilteredMembers = (members, user) => members.filter(member => !_.isEqual( member.id, user.id));

const mapStateToProps = (state) => ( {
  members: getFilteredMembers(
    state.members,
    state.user,
  ), 
});
class MemberList extends React.Component {
  constructor() {
    super();
    this.state = {
      active: false,
    };
  }
  
  render() {
    const { members } = this.props;
    const membersJSX = members.map(member =>
      <li key={member.id} onClick={() => this.setState((prevState) => ({active: !prevState}))}>{member.username}</li> 
    );
    return (
      <ul className={styles.memberList}>
        {membersJSX}
      </ul>
    );
  }
}

export default connect(mapStateToProps)(MemberList);