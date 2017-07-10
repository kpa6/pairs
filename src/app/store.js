import { createStore, applyMiddleware,compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import { cards } from './data/';
				 
const defaultState = { 
	cards,
	preloader: {
		loading: false
	}, 
	modal: {
		show: false,
		time: 0
	}, 
	clicksCounter: {
		value: 0
	}
};
const store = createStore(rootReducer, defaultState, compose(
 	applyMiddleware(thunk),
 	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export const history = syncHistoryWithStore(browserHistory, store);
export default store;