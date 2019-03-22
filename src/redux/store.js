import AppReducer from './AppReducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export default createStore(AppReducer, applyMiddleware(thunk, logger))