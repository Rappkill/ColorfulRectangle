import { createStore } from 'redux';
import BoxReducer from './reducers';

const store = createStore(BoxReducer);
export default store;
