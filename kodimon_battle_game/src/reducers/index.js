import { combineReducers } from "redux";
import pokemonReducer from "./pokemonReducer";
import pokemonReducer2 from "./pokemonReducer2";
import directionReducer from "./directionReducer";
import pokemonHP from "./pokemonHP";
import pokemon2HP from "./pokemon2HP";
import damageReducer from "./damageReducer";
import damageReducer2 from "./damageReducer2";
import logReducer from "./logReducer";

export default combineReducers({
    pokemon: pokemonReducer,
    pokemon2: pokemonReducer2,
    direction: directionReducer,
    pokemonHP: pokemonHP,
    pokemon2HP: pokemon2HP,
    rightToleftDMG: damageReducer,
    leftTorightDMG: damageReducer2,
    logAdd: logReducer
})