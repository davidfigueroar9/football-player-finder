import React from 'react';
import { shallow } from '../../../enzyme';
import FootballPlayers from './FootballPlayers';

jest.mock('./components/Filter', () => 'Filter');
jest.mock('./components/PlayersList', () => 'PlayersList');

describe('FootballPlayers', () => {
  it('should render FootballPlayers and call fetchPlayers', () => {
    const fetchPlayers = jest.fn();
    const wrapper = shallow(
      <FootballPlayers fetchPlayers={fetchPlayers} />,
    );
    expect(wrapper.find('.FootballPlayers').length).toBe(1);
    expect(wrapper.find('Filter').length).toEqual(1);
    expect(wrapper.find('PlayersList').length).toEqual(1);
    expect(fetchPlayers).toBeCalled();
  });

  it('should render Filter and PlayersList', () => {
    const fetchPlayers = jest.fn();
    const wrapper = shallow(
      <FootballPlayers fetchPlayers={fetchPlayers} />,
    );
    expect(wrapper.find('Filter').length).toEqual(1);
    expect(wrapper.find('PlayersList').length).toEqual(1);
  });
});
