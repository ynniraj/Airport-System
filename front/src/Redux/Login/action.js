import axios from "axios";


export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const LOGIN_ERROR = "LOGIN_ERROR";

export const LOGIN_LODING = "LOGIN_LODING";

export const LOGIN_LOGOUT = "LOGIN_LOGOUT";

export const loginLoding = () => ({ type: LOGIN_LODING });

export const loginError = () => ({ type: LOGIN_ERROR });

export const loginSuccess = (payload) => ({
    type: LOGIN_SUCCESS,
    payload,
});

export const loginLogout = () => ({
    type: LOGIN_LOGOUT
});



export const loginSuccessData = (data, navigate, setShowerr) => (dispatch) => {
    dispatch(loginLoding());
    axios
        .post("https://flight-airport.herokuapp.com/login", data)
        .then(({ data }) => {
            dispatch(loginSuccess(data));
            alert("login Success")
            localStorage.setItem("auth", true);
            navigate("/");
        })
        .catch((err) => {
            dispatch(loginError());
            setShowerr(true)
        });
};


