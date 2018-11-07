import React from 'react';
import { shallow } from '../../../enzyme';
import FootballPlayers from './FootballPlayers';

jest.mock('./components/Filter', () => 'Filter');
jest.mock('./components/PlayersList', () => 'PlayersList');

describe('FootballPlayers', () => {
  it('should render Filter, FootballPlayers and PlayersList and call fetchPlayers', () => {
    const fetchPlayers = jest.fn(() => Promise.resolve(false));
    const wrapper = shallow(
      <FootballPlayers fetchPlayers={fetchPlayers} />,
    );
    expect(fetchPlayers).toBeCalled();
    expect(wrapper.find('.FootballPlayers').length).toBe(1);
    expect(wrapper.find('.FootballPlayers-status').length).toBe(1);

    setImmediate(() => {
      wrapper.update();
      expect(wrapper.find('.FootballPlayers-status').length).toBe(0);
      expect(wrapper.find('Filter').length).toBe(1);
      expect(wrapper.find('PlayersList').length).toBe(1);
    });
  });

  it('should render Error', () => {
    const fetchPlayers = jest.fn(() => Promise.resolve(true));
    const wrapper = shallow(
      <FootballPlayers fetchPlayers={fetchPlayers} />,
    );
    expect(fetchPlayers).toBeCalled();
    expect(wrapper.find('.FootballPlayers').length).toBe(1);
    expect(wrapper.find('.FootballPlayers-status').length).toBe(1);

    setImmediate(() => {
      wrapper.update();
      expect(wrapper.find('.FootballPlayers-status').length).toBe(1);
    });
  });
});
