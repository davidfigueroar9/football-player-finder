import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class Filter extends PureComponent {
  static propTypes = {
    setFilter: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    age: '',
    position: '',
  }

  onChangeName = (event) => {
    const { value } = event.target;
    if (Number.isNaN(Number(value[value.length - 1]))) {
      this.setState({ name: value });
    }
  }

  onChangeAge = (event) => {
    const { value } = event.target;
    if (value.length > 2) {
      return;
    }
    const age = Number(value) || '';
    this.setState({ age });
  }

  onChangePosition = (event) => {
    this.setState({ position: event.target.value });
  }

  onSearch = (event) => {
    event.preventDefault();
    const { setFilter } = this.props;
    setFilter(this.state);
  }

  render() {
    const { name, age, position } = this.state;
    return (
      <form onSubmit={this.onSearch} className="Filter-content">
        <div className="Filter-input-content">
          <input value={name} onChange={this.onChangeName} className="Filter-input" type="text" placeholder="Name" />
        </div>
        <div className="Filter-input-content">
          <select onChange={this.onChangePosition} value={position} className="Filter-input" placeholder="Position">
            <option value="">Select Position</option>
            <option>Attacking Midfield</option>
            <option>Central Midfield</option>
            <option>Centre-Back</option>
            <option>Centre-Forward</option>
            <option>Defensive Midfield</option>
            <option>Keeper</option>
            <option>Left Midfield</option>
            <option>Left Wing</option>
            <option>Left-Back</option>
            <option>Right-Back</option>
          </select>
        </div>
        <div className="Filter-input-content">
          <input
            onChange={this.onChangeAge}
            value={age}
            className="Filter-input"
            max="40"
            min="18"
            type="number"
            placeholder="Age"
          />
        </div>
        <button type="submit" className="Filter-buttom">Search</button>
      </form>
    );
  }
}

export default Filter;
