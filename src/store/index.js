import { createStore, combineReducers } from 'redux';
import transactions from './reducers/transactions';

const reducer = combineReducers({
  transactions
});

const store = createStore(reducer);

export default store;
