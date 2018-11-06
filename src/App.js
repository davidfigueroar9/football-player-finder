import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import axios from 'axios';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

import FootballPlayersWithContainer from './components/FootballPlayers';

import './index.css';

const axiosIntance = axios.create({
  baseURL: 'https://football-players-b31f2.firebaseio.com/players.json?print=pretty',
});

const store = createStore(
  reducers, {},
  compose(
    applyMiddleware(thunk.withExtraArgument(axiosIntance)),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
);

const App = () => (
  <Provider store={store}>
    <FootballPlayersWithContainer />
  </Provider>
);


export default App;
