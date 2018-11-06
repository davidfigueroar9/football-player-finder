import React from 'react';
import { shallow } from '../../../../../enzyme';
import PlayersList from './PlayersList';


describe('Filter', () => {
  it('should render PlayersList', () => {
    const players = [
      {
        name: 'Romelu Lukaku',
        position: 'Centre-Forward',
        age: 25,
        nationality: 'Belgium',
      },
      {
        name: 'David de Gea',
        position: 'Keeper',
        age: 27,
        nationality: 'Spain',
      },
    ];

    const wrapper = shallow(
      <PlayersList players={players} />,
    );
    expect(wrapper.find('.PlayersList').length).toBe(1);
    expect(wrapper.find('.PlayersList-item').length).toBe(2);
  });
});
