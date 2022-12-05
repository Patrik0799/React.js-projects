import { combineReducers } from "redux";
import pokemonReducer from "./pokemonReducer";
import pokemonReducer2 from "./pokemonReducer2";

export default combineReducers({
    pokemon: pokemonReducer,
    pokemon2: pokemonReducer2
})