export default (state = 0, action) =>{
    switch(action.type){
        case "SET_LEFT":
            return 0;
        case "SET_RIGHT":
            return 1;
        default:
            return state;
    }
}