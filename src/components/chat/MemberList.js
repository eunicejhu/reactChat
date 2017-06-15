import React from 'react';
import styles from './Chat.css';
import * as _ from 'lodash';
import { connect } from 'react-redux';

const getFilteredMembers = (members, user) => members.filter(member => !_.isEqual( member.id, user.id));

const mapStateToProps = (state) => ( {
  members: getFilteredMembers(
    state.members,
    state.user,
  ), 
});
const MemberList = (props) => {
  const { members } = props;
  const membersJSX = members.map(member => 
    <li key={member.id}>{member.username}</li>
  );
  return (
    <ul className={styles.memberList}>
      {membersJSX}
    </ul>
  );
};

export default connect(mapStateToProps)(MemberList);