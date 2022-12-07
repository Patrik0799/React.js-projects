export default (state = 0, action) => {
    switch(action.type){
        case "SET_COUNTER":
            return state + 1;
        default:
            return state
    }
}