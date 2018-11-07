import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import FilterWithContainer from './components/Filter';
import PlayersListWithContainer from './components/PlayersList';
import './styles.css';

class FootballPlayers extends PureComponent {
  state = {
    loading: false,
    error: false,
  }

  static propTypes = {
    fetchPlayers: PropTypes.func.isRequired,
  };

  async componentDidMount() {
    const { fetchPlayers } = this.props;
    this.setState({ loading: true });
    const error = await fetchPlayers();
    this.setState({ loading: false, error });
  }

  render() {
    const { error, loading } = this.state;
    return (
      <div className="FootballPlayers">
        <div className="FootballPlayers-content">
          <h2 className="FootballPlayers-title">Football Player Finder</h2>
          {
            loading || error ? (
              <h2 className="FootballPlayers-status">{ loading ? 'Loading...' : 'Error' }</h2>
            ) : (
              <Fragment>
                <FilterWithContainer />
                <PlayersListWithContainer />
              </Fragment>
            )
          }

        </div>
      </div>
    );
  }
}

export default FootballPlayers;
