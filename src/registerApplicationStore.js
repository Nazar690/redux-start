import {createStore, applyMiddleware} from 'redux';
import {shopReducer} from './reducers/index';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export default function setupStore() {
  return createStore(shopReducer, composeWithDevTools(applyMiddleware(thunk)));
}