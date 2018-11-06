import React from 'react';
import { shallow } from '../../../../../enzyme';
import Filter from './Filter';


describe('Filter', () => {
  it('should render Filter', () => {
    const setFilter = jest.fn();
    const wrapper = shallow(
      <Filter setFilter={setFilter} />,
    );
    expect(wrapper.find('.Filter-content').length).toBe(1);
  });

  it('should call setFilter function', () => {
    const event = {
      preventDefault: () => {},
    };
    const filterObject = {
      age: '',
      position: '',
      name: '',
    };
    const setFilter = jest.fn();
    const wrapper = shallow(
      <Filter setFilter={setFilter} />,
    );

    wrapper.find('.Filter-content').simulate('submit', event);
    expect(setFilter).toBeCalledWith(filterObject);
  });


  it('should change name correctly', () => {
    const event = {
      preventDefault: () => {},
      target: {
        value: 'David',
      },
    };
    const eventWithNumber = {
      preventDefault: () => {},
      target: {
        value: 'David3',
      },
    };
    const setFilter = jest.fn();
    const wrapper = shallow(
      <Filter setFilter={setFilter} />,
    );

    // on change call with text
    wrapper.find('input').first().simulate('change', event);
    // set name correctly
    expect(wrapper.instance().state.name).toBe(event.target.value);

    // on change call with number
    wrapper.find('input').first().simulate('change', eventWithNumber);
    // don't set number to name
    expect(wrapper.instance().state.name).toBe(event.target.value);
  });

  it('should change position correctly', () => {
    const event = {
      preventDefault: () => {},
      target: {
        value: 'Attacking Midfield',
      },
    };
    const setFilter = jest.fn();
    const wrapper = shallow(
      <Filter setFilter={setFilter} />,
    );

    // on change call with text
    wrapper.find('select').simulate('change', event);
    // set position correctly
    expect(wrapper.instance().state.position).toBe(event.target.value);
  });

  it('should change age correctly', () => {
    const event = {
      preventDefault: () => {},
      target: {
        value: '22',
      },
    };

    const eventLongText = {
      preventDefault: () => {},
      target: {
        value: '222',
      },
    };

    const eventNotText = {
      preventDefault: () => {},
      target: {
        value: '',
      },
    };
    const setFilter = jest.fn();
    const wrapper = shallow(
      <Filter setFilter={setFilter} />,
    );

    // on change call with text
    wrapper.find('input').at(1).simulate('change', event);
    // set position correctly
    expect(wrapper.instance().state.age).toBe(22);

    // on change call with text
    wrapper.find('input').at(1).simulate('change', eventLongText);
    // set position correctly
    expect(wrapper.instance().state.age).toBe(22);

    // on change call with text
    wrapper.find('input').at(1).simulate('change', eventNotText);
    // set position correctly
    expect(wrapper.instance().state.age).toBe('');
  });

  it('should call setFilter with name set', () => {
    const event = {
      preventDefault: () => {},
      target: {
        value: 'David',
      },
    };
    const filterObject = {
      age: '',
      position: '',
      name: 'David',
    };
    const setFilter = jest.fn();
    const wrapper = shallow(
      <Filter setFilter={setFilter} />,
    );
    wrapper.find('input').first().simulate('change', event);
    // Before doubleclick
    expect(wrapper.instance().state.name).toBe(filterObject.name);

    wrapper.find('.Filter-content').simulate('submit', event);
    expect(setFilter).toBeCalledWith(filterObject);
  });
});
