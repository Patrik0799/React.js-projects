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

export const setLeftPokemonHP = () => {
    return{
        type: "SET_LEFT_HP"
    }
}

export const setRightPokemonHP = () => {
    return{
        type: "SET_RIGHT_HP"
    }
}
