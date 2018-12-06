import { connect } from 'react-redux';
import cityInfo from './cityInfo';

function mapStoreToProps(store) {
  return {
    weatherInfo: store.search.weatherInfo
  };
}

export default connect(mapStoreToProps)(cityInfo);