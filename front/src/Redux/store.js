import { createStore, combineReducers } from 'redux';
import { getDataReducer, LogInReducer } from '../Redux/reducer';

const rootReducer = combineReducers({
    getDataReducer,
    LogInReducer
})

export const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())