import { createStore, combineReducers, applyMiddleware } from 'redux';
import { registerReducer } from './Register/reducer';
import { loginReducer } from './Login/reducer';
import { flightReducer } from './Flight/reducer';
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk];

const rootReducer = combineReducers({
    register: registerReducer,
    login: loginReducer,
    flight: flightReducer
})

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);