export default (state = 0, action) => {
    switch(action.type){
        case "LOG_INC":
            return action.payload
        case "LOG_DEC":
            return action.payload
        default:
            return state
    }
}