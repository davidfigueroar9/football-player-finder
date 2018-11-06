import { createSelector } from 'reselect';
import moment from 'moment';

export const getPlayers = state => state.players;
export const getFilters = state => state.filters;

const playerShape = player => ({
  ...player,
  age: Number(moment().diff(moment(player.dateOfBirth), 'years').toString()),
});

/**
 * Generate an array of players with age
 * @type {array}
 */
export const getPlayersWithAge = createSelector(
  getPlayers,
  players => players.map(playerShape),
);

/**
 * Generate an array of players filters by age, position and name
 * @type {array}
 */
export const getPlayersWithAgeFilter = createSelector(
  getPlayersWithAge,
  getFilters,
  (players, filters) => players.filter(player => (
    (filters.age === '' || player.age === filters.age)
    && (filters.position === '' || player.position === filters.position)
    && (filters.name === '' || player.name.indexOf(filters.name) > -1)
  )),
);
