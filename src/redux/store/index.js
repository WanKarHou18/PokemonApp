import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from '../reducers';

const middleware = applyMiddleware(thunk);

const store = createStore(rootReducer, middleware);

export default store;