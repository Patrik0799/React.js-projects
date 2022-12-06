import pokeAPI from "../apis/pokeAPI";

export const fetchPokemon1 = (pokeID) => {
        return async (dispatch) => {
            const response = await pokeAPI.get(`/pokemon/${pokeID}`);
            dispatch({
                type: "FETCH_POKEMON_1", 
                payload: response.data
            })
        }
}

export const fetchPokemon2 = (pokeID) => {
    return async (dispatch) => {
        const response = await pokeAPI.get(`/pokemon/${pokeID}`);
        dispatch({
            type: "FETCH_POKEMON_2", 
            payload: response.data
        })
    }
}

export const setToLeftPokemon = () => {
    return {
        type: "SET_LEFT"
    }
}

export const setToRightPokemon = () => {
    return{
        type: "SET_RIGHT"
    }
}

export const initialSetLeftPokemonHP = (initialHP) => {
    return{
        type: "INITIAL_SET_LEFT_HP",
        payload: initialHP
    }
}

export const newSetLeftPokemonHP = (dmg) => {
    return{
        type: "SET_NEW_LEFT_HP",
        payload: dmg
    }
}

export const initialSetRightPokemonHP = (initialHP) => {
    return{
        type: "INITIAL_SET_RIGHT_HP",
        payload: initialHP
    }
}

export const newSetRightPokemonHP = (dmg) => {
    return {
        type: "SET_NEW_RIGHT_HP",
        payload: dmg
    }
}

export const logTo1 = (num) =>{
    return{
        type: "LOG_INC",
        payload: num
    }
}

export const logTo2 = (num) =>{
    return{
        type: "LOG_DEC",
        payload: num
    }
}

