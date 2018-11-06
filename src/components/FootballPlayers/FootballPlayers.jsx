import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import FilterWithContainer from './components/Filter';
import PlayersListWithContainer from './components/PlayersList';
import './styles.css';

class FootballPlayers extends PureComponent {
  static propTypes = {
    fetchPlayers: PropTypes.func.isRequired,
  };

  async componentDidMount() {
    const { fetchPlayers } = this.props;
    await fetchPlayers();
  }

  render() {
    return (
      <div className="FootballPlayers">
        <div className="FootballPlayers-content">
          <h2 className="FootballPlayers-title">Football Player Finder</h2>
          <FilterWithContainer />
          <PlayersListWithContainer />
        </div>
      </div>
    );
  }
}

export default FootballPlayers;
