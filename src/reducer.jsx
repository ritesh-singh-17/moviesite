const Reducer = (state, action) => {
    if(action.type === "SET_LOADING"){
        return {
            ...state,
            isLoading: true,
        }
    }
    if(action.type === "SET_API_DATA"){
        return{
            ...state,
            isLoading:false,
            products: action.payload,
        }
    }
    if(action.type === "API_ERROR"){
        return {
            ...state,
            isLoading: false,
            isError: true
        }
    }
    return state;
}
export default Reducer;