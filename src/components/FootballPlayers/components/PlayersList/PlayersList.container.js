import { connect } from 'react-redux';
import PlayersList from './PlayersList';

const mapStateToProps = state => ({
  players: state.players,
});

export default connect(mapStateToProps)(PlayersList);
