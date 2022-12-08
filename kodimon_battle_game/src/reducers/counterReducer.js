export default (state = 0, action) => {
    switch(action.type){
        case "SET_COUNTER":
            return state + 1;
        case "RESET_COUNTER":
            return 0;
        default:
            return state
    }
}