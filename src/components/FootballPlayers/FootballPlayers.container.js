import { connect } from 'react-redux';
import FootballPlayers from './FootballPlayers';
import { fetchPlayers } from '../../actions';

export default connect(null, { fetchPlayers })(FootballPlayers);
