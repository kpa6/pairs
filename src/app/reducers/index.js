import { combineReducers } from 'redux';
import cards from './cards';
import preloader from './preloader';
import modal from './modal';
import clicksCounter from './clicksCounter';
import { routerReducer } from 'react-router-redux';


const rootReducer = combineReducers({
  cards,
  clicksCounter,
  preloader,
  modal,
  routing: routerReducer
}); 

export default rootReducer;
