import { combineReducers } from "redux";
import pokemonReducer from "./pokemonReducer";
import pokemonReducer2 from "./pokemonReducer2";
import directionReducer from "./directionReducer";

export default combineReducers({
    pokemon: pokemonReducer,
    pokemon2: pokemonReducer2,
    direction: directionReducer
})