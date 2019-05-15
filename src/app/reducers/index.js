import { combineReducers } from 'redux';
import { routerReducer as router } from 'connected-next-router';

import cards from './cards';
import preloader from './preloader';
import modal from './modal';
import clicksCounter from './clicksCounter';
import gameStarted from './gameStarted';


const rootReducer = combineReducers({
  cards,
  clicksCounter,
  preloader,
  modal,
  gameStarted,
  router
});

export default rootReducer;
