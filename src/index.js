import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import axios from 'axios';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

import FootballPlayers from './components/FootballPlayers';
import * as serviceWorker from './serviceWorker';

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

const AppProvider = () => (
  <Provider store={store}>
    <FootballPlayers />
  </Provider>
);


ReactDOM.render(<AppProvider />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
