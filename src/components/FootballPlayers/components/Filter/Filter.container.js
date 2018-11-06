import { connect } from 'react-redux';
import Filter from './Filter';
import { setFilter } from '../../../../actions';

export default connect(null, { setFilter })(Filter);
