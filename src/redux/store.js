import { combineReducers, createStore } from 'redux';
import transactionsReducer from './reducer';
const reducer = combineReducers({
    transactionsReducer: transactionsReducer,
  });

const store = createStore(reducer);

export default store;