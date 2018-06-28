import { combineReducers } from 'redux';
import userStore from './user-reducer';

const reducers = {
    userStore: userStore
}

const rootReducer = combineReducers(reducers);

export default rootReducer;