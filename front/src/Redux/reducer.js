const initState = { products: [], token: "" };

export const getDataReducer = (state = initState, action) => {
    switch (action.type) {
        case "SET_PRODUCTS":

            return {
                ...state,
                products: action.payload
            }



        default:
            return state;
    }

}

export const LogInReducer = (store = initState, action) => {
    switch (action.type) {
        case "USER_LOGIN":
            return {
                ...store,
                token: action.payload,
            }
        default:
            return store;
    }

}