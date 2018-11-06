import moment from 'moment';
import {
  getPlayers,
  getFilters,
  getPlayersWithAge,
  getPlayersWithAgeFilter,
} from './players.selectors';


describe('players.selectors', () => {
  it('should return getPlayers and getFilters', () => {
    const state = {
      filters: {
        age: '',
        position: '',
        name: '',
      },
      players: [
        {
          name: 'Eric Bailly',
          position: 'Centre-Back',
          dateOfBirth: '1990-12-12',
          nationality: 'England',
        },
      ],
    };
    expect(getPlayers(state)).toEqual(state.players);
    expect(getFilters(state)).toEqual(state.filters);
  });


  it('should return getPlayersWithAge', () => {
    const state = {
      filters: {
        age: '',
        position: '',
        name: '',
      },
      players: [
        {
          name: 'Eric Bailly',
          position: 'Centre-Back',
          dateOfBirth: '1990-12-12',
          nationality: 'England',
        },
      ],
    };
    expect(getPlayersWithAge(state)).toEqual([
      {
        ...state.players[0],
        age: Number(moment().diff(moment(state.players[0].dateOfBirth), 'years').toString()),
      },
    ]);
  });

  it('should return getPlayersWithAgeFilter with one player by name', () => {
    const state = {
      filters: {
        age: '',
        position: '',
        name: 'Eric',
      },
      players: [
        {
          name: 'Eric Bailly',
          position: 'Centre-Back',
          dateOfBirth: '1990-12-12',
          nationality: 'England',
        },
        {
          name: 'David Bailly',
          position: 'Centre-Back',
          dateOfBirth: '1990-12-12',
          nationality: 'England',
        },
      ],
    };

    const expected = [
      {
        ...state.players[0],
        age: Number(moment().diff(moment(state.players[0].dateOfBirth), 'years').toString()),
      },
    ];
    expect(getPlayersWithAgeFilter(state)).toEqual(expected);
  });

  it('should return getPlayersWithAgeFilter with one player by position', () => {
    const state = {
      filters: {
        age: '',
        position: 'Centre-Back',
        name: '',
      },
      players: [
        {
          name: 'Eric Bailly',
          position: 'Centre-Forward',
          dateOfBirth: '1990-12-12',
          nationality: 'England',
        },
        {
          name: 'David Bailly',
          position: 'Centre-Back',
          dateOfBirth: '1990-12-12',
          nationality: 'England',
        },
      ],
    };

    const expected = [
      {
        ...state.players[1],
        age: Number(moment().diff(moment(state.players[0].dateOfBirth), 'years').toString()),
      },
    ];
    expect(getPlayersWithAgeFilter(state)).toEqual(expected);
  });

  it('should return getPlayersWithAgeFilter with one player by age', () => {
    const state = {
      filters: {
        age: Number(moment().diff(moment('1988-12-12'), 'years').toString()),
        position: '',
        name: '',
      },
      players: [
        {
          name: 'Eric Bailly',
          position: 'Centre-Forward',
          dateOfBirth: '1988-12-12',
          nationality: 'England',
        },
        {
          name: 'David Bailly',
          position: 'Centre-Back',
          dateOfBirth: '1990-12-12',
          nationality: 'England',
        },
      ],
    };

    const expected = [
      {
        ...state.players[0],
        age: Number(moment().diff(moment(state.players[0].dateOfBirth), 'years').toString()),
      },
    ];
    expect(getPlayersWithAgeFilter(state)).toEqual(expected);
  });
});
