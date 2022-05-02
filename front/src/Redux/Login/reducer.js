import {
    LOGIN_ERROR,
    LOGIN_LODING,
    LOGIN_SUCCESS,
    LOGIN_LOGOUT,
} from "./action";

const initialState = {
    users: {},
    token: "",
    isAuth: false,
    loding: false,
    error: false,
};
export const loginReducer = (store = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN_LODING:
            return { ...store, loding: true };

        case LOGIN_ERROR:
            return { ...store, loding: false, error: true, isAuth: false };

        case LOGIN_SUCCESS:
            return { ...store, loding: false, error: false, users: payload, isAuth: payload, token: payload.token };

        case LOGIN_LOGOUT:
            return { ...initialState };

        default:
            return store;
    }
};