import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import store, { history } from './store';

import App from './components/App';
import Home from './components/home/Home';
import Game from './components/game/Game';

import reducers from './reducers';

import './components/bundle.scss';


ReactDOM.render(
  <Provider store={ store }>
    <Router onUpdate={ () => window.scrollTo(0, 0) } history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Home } />;
        <Route path="/game" component={ Game } />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('react-root'));
