import axios from "axios";


export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const LOGIN_ERROR = "LOGIN_ERROR";

export const LOGIN_LODING = "LOGIN_LODING";

export const LOGIN_LOGOUT = "LOGIN_LOGOUT";

export const GET_ONE = "GET_ONE";

export const loginLoding = () => ({ type: LOGIN_LODING });

export const loginError = () => ({ type: LOGIN_ERROR });

export const loginSuccess = (payload) => ({
    type: LOGIN_SUCCESS,
    payload,
});

export const loginLogout = () => ({
    type: LOGIN_LOGOUT
});

export const getone = (payload) => ({
    type: GET_ONE,
    payload,
});


export const loginSuccessData = (data, navigate, setShowerr, toast) => (dispatch) => {
    dispatch(loginLoding());
    axios
        .post("https://flight-airport.herokuapp.com/login", data)
        .then(({ data }) => {
            dispatch(loginSuccess(data));
            localStorage.setItem("auth", data.token);
            localStorage.setItem("user._id", data.user._id);
            toast.success("Logged in Successfully", {
                position: "top-center",
            });
            setShowerr(false);
            setTimeout(() => {
                navigate("/");
            }, 2000);
        })
        .catch((err) => {
            dispatch(loginError());
            toast.error("Logged in Failed", {
                position: "top-center",
            });
            setShowerr(true)
        });
};

export const getoneData = () => (dispatch) => {
    const userid = localStorage.getItem("user._id");
    const usertoken = localStorage.getItem("auth");

    axios
        .get(`http://localhost:8080/getone/${userid}`, {
            headers: { token: `Bearer ${usertoken}` },
        })
        .then(({ data }) => {
            dispatch(getone(data));
        })
        .catch((err) => {
            console.log(err);
        });
};


