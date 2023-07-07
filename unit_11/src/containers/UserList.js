import { connect } from 'react-redux';
import List from '../components/List';

function mapStateToProps(state) {
  console.log(state);
  const { users } = state;
  return { userName: users };
}

export default connect(mapStateToProps, null)(List);
