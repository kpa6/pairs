import { createStore, applyMiddleware } from 'redux';
import { createRouterMiddleware } from 'connected-next-router'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'remote-redux-devtools'
import logger from 'redux-logger'

import rootSaga from './sagas/'
import rootReducer from './reducers/index';
import { cards } from './data/';

const dev = process.env.NODE_ENV !== 'production'

const routerMiddleware = createRouterMiddleware();
const sagaMiddleware = createSagaMiddleware();

const defaultState = {
	cards,
	preloader: {
		loading: true
	},
	modal: {
		show: false,
		time: 0
	},
	clicksCounter: {
		value: 0
	},
	gameStarted: false
};

const composeEnhancers = composeWithDevTools({ realtime: true })

const createComposedStore = (initialState, options) => {
	if (options.asPath)
		defaultState = { ... defaultState, ...initialState, router: initialRouterState(options.asPath) }

  const midldewares = dev ?
    [sagaMiddleware, routerMiddleware, logger] :
    [sagaMiddleware, routerMiddleware];

  const store = dev ?
    createStore(rootReducer, defaultState,  composeEnhancers(applyMiddleware(...midldewares))) :
    createStore(rootReducer, defaultState,  applyMiddleware(...midldewares))

	sagaMiddleware.run(rootSaga);
	return store
}

export default createComposedStore;