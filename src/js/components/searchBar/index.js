import { connect } from 'react-redux';
import searchBar from './searchBar';

function mapStoreToProps(store) {
  return {
    userQuery: store.search.userQuery
  };
}

export default connect(mapStoreToProps)(searchBar);