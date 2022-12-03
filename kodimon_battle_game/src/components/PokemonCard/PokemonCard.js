import React from 'react';
import styled from "styled-components";

const PokemonCard = () => {
  return (
    <PokemonCardComponent>
        <div className='pokemon'>
            <h1>Charmander</h1>
            <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg' alt=''/>
        </div>
        <h3>Stats</h3>
        <div className='stats'>
            <h4 className='stat'>HP: 100</h4>
            <h4 className='stat'>Attack: 65</h4>
            <h4 className='stat'>Defense: 400</h4>
            <h4 className='stat_2'>Speed: 10</h4>
        </div>
    </PokemonCardComponent>
  )
}

export default PokemonCard

const PokemonCardComponent = styled.div `
    width: 250px;
    height: 365px;
    font-family: Bellota;
    
    h1 {
        font-size: 17px;
        text-align: center;
    }

    h3 {
        font-size: 17px;
        margin-bottom: 5px;
        padding-left: 10px;
    }

    img {
        height: auto;
        width: 140px;
        text-align: center;
        margin-top: 5px;
    }

    .pokemon {
        text-align:center;
    }

    .stat {
        margin-top: 2px;
        margin-bottom:1px;
        padding-left: 10px;
    }

    .stat_2 {
        margin-top: 2px;
        margin-bottom:25px;
        padding-left: 10px;
    }

    .stats {
        font-size: 14px;
        border: 4px solid #FFCC00;
        border-radius: 18px;
        background-color: #FFF7D6;
        padding-top: 5px;
    }
`