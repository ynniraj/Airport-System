import axios from "axios";

export const FLIGHT_SUCCESS = "FLIGHT_SUCCESS";

export const FLIGHT_ERROR = "FLIGHT_ERROR";

export const FLIGHT_LOADING = "FLIGHT_LOADING";

export const flightLoading = () => ({ type: FLIGHT_LOADING });

export const flightError = () => ({ type: FLIGHT_ERROR });

export const flightSuccess = (payload) => ({
    type: FLIGHT_SUCCESS,
    payload,
});


export const flightSuccessData = (data) => (dispatch) => {
    dispatch(flightLoading());
    axios
        .get("https://flight-airport.herokuapp.com/allflights")
        .then(({ data }) => {
            dispatch(flightSuccess(data));
        })
        .catch((err) => {
            dispatch(flightError());
        });
};

export const searchflightSuccessData = (start, end) => (dispatch) => {
    dispatch(flightLoading());
    axios
        .get(`https://flight-airport.herokuapp.com/flightbyname?startairport=${start}&endairport=${end}`)
        .then(({ data }) => {
            dispatch(flightSuccess(data));
        })
        .catch((err) => {
            dispatch(flightError());
        });
};


