import {
    FLIGHT_ERROR,
    FLIGHT_LOADING,
    FLIGHT_SUCCESS,
} from "./action";

const initialState = {
    data: [],
    loading: false,
    error: false,
};
export const flightReducer = (store = initialState, { type, payload }) => {
    switch (type) {
        case FLIGHT_LOADING:
            return { ...store, loading: true };

        case FLIGHT_ERROR:
            return { ...store, loading: false, error: true };

        case FLIGHT_SUCCESS:
            return { ...store, loading: false, error: false, data: payload };

        default:
            return store;
    }
};