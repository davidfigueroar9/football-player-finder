import { connect } from 'react-redux';
import PlayersList from './PlayersList';
import { getPlayersWithAgeFilter } from '../../../../selectors/players.selectors';

const mapStateToProps = state => ({
  players: getPlayersWithAgeFilter(state),
});

export default connect(mapStateToProps)(PlayersList);
