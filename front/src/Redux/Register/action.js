import axios from "axios";

export const REGISTER_SUCCESS = "REGISTER_SUCCESS";

export const REGISTER_ERROR = "REGISTER_ERROR";

export const REGISTER_LODING = "REGISTER_LODING";

export const registerLoding = () => ({ type: REGISTER_LODING });

export const registerError = () => ({ type: REGISTER_ERROR });

export const registerSuccess = (payload) => ({
    type: REGISTER_SUCCESS,
    payload,
});


export const registerSuccessData = (data, setShowerr, navigate, toast) => (dispatch) => {
    dispatch(registerLoding());
    axios
        .post("https://flight-airport.herokuapp.com/register", data)
        .then(({ data }) => {
            dispatch(registerSuccess(data));
            toast.success("Registration Successfull", {
                position: "top-center",
            });
            setTimeout(() => {
                navigate("/login");
            }, 2000);
        })
        .catch((err) => {
            dispatch(registerError());
            toast.error("Registration Failed", {
                position: "top-center",
            });
            setShowerr(true)
        });
};


