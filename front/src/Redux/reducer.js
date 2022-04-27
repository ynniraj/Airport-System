const initState = { products: [] };

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