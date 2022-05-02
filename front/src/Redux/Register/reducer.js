import {
    REGISTER_ERROR,
    REGISTER_LODING,
    REGISTER_SUCCESS,
} from "./action";

const initialState = {
    users: {},
    loding: false,
    error: false,
};
export const registerReducer = (store = initialState, { type, payload }) => {
    switch (type) {
        case REGISTER_LODING:
            return { ...store, loding: true };

        case REGISTER_ERROR:
            return { ...store, loding: false, error: true };

        case REGISTER_SUCCESS:
            return { ...store, loding: false, error: false, users: payload };

        default:
            return store;
    }
};