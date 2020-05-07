import { createStore, compose } from 'redux';
import { rootReducer } from './rootReducer';

let composeEnhancers;

if (process.env.NODE_ENV === 'production') {
  composeEnhancers = compose;
} else {
  composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
}

const store = createStore(rootReducer, composeEnhancers());

export default store;
export const dispatch = store.dispatch;
export const getState = store.getState;
