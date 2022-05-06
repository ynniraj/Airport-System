import {
    LOGIN_ERROR,
    LOGIN_LODING,
    LOGIN_SUCCESS,
    LOGIN_LOGOUT,
    GET_ONE
} from "./action";

const initialState = {
    users: {},
    token: "",
    loding: false,
    error: false,
};
export const loginReducer = (store = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN_LODING:
            return { ...store, loding: true };

        case LOGIN_ERROR:
            return { ...store, loding: false, error: true };

        case LOGIN_SUCCESS:
            return { ...store, loding: false, error: false, users: payload, token: payload };

        case GET_ONE:
            return { ...store, users: payload };

        case LOGIN_LOGOUT:
            return { ...initialState };

        default:
            return store;
    }
};