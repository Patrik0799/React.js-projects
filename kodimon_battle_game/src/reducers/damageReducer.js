export default (state = 0, action) => {
    switch(action.type){
        case "SET_NEW_LEFT_HP":
            return action.payload
        default:
            return state
    }
}