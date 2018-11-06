import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const PlayersList = ({ players }) => (
  <div className="PlayersList">
    <div className="PlayersList-header">
      <div className="PlayersList-header-text">Player</div>
      <div className="PlayersList-header-text">Position</div>
      <div className="PlayersList-header-text">Team</div>
      <div className="PlayersList-header-text">Age</div>
    </div>

    {
      players.map(player => (
        <div key={`PlayersList-item-${player.name}`} className="PlayersList-item">
          <div className="PlayersList-item-text">{ player.name }</div>
          <div className="PlayersList-item-text">{ player.position }</div>
          <div className="PlayersList-item-text">{ player.nationality }</div>
          <div className="PlayersList-item-text">{ player.age }</div>
        </div>
      ))
    }

  </div>
);

PlayersList.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    nationality: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  })).isRequired,
};

export default PlayersList;
