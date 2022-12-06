import React, { useEffect } from 'react'
import styled from "styled-components";
import PokemonCard from "./PokemonCard/PokemonCard";
import ArrowCard from './arrowCard.js/ArrowCard';
import Button from './Button/Button';

import { connect } from "react-redux";
import { fetchPokemon1, fetchPokemon2 } from '../actions';

const BattlePage = ({
  pokemon, 
  pokemon2, 
  fetchPokemon1, 
  fetchPokemon2
  }) =>{

  //ovo je islo u componentDidMount()
  useEffect(()=> {
    fetchPokemon1(Math.floor(Math.random() * (600 - 1) + 1));
    fetchPokemon2(Math.floor(Math.random() * (600 - 1) + 1));
  }, [])

  //Ovih par linija je islo u render(){} prije returna
  console.log(pokemon.name);
  console.log(pokemon2.name);

  if(!pokemon2.name || !pokemon.name){
    return null;
  }

    return (
      <BattlePageComponent>
        <div className='battle-pokemon'>
          <PokemonCard 
            name = {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1).toLowerCase()}
            image = {pokemon.sprites.other.dream_world.front_default}
            hp = {pokemon.stats[0].base_stat}
            attack = {pokemon.stats[1].base_stat}
            defence = {pokemon.stats[2].base_stat}
            speed = {pokemon.stats[5].base_stat}
          />
          <ArrowCard 
            LeftPokemonSpeed={pokemon.stats[5].base_stat} 
            RightPokemonSpeed={pokemon2.stats[5].base_stat}
            LeftPokemonAttack={pokemon.stats[1].base_stat}
            RightPokemonAttack={pokemon2.stats[1].base_stat}
            LeftPokemonDefence={pokemon.stats[2].base_stat}
            RightPokemonDefence={pokemon2.stats[2].base_stat}
          />
          <PokemonCard 
            name = {pokemon2.name.charAt(0).toUpperCase() + pokemon2.name.slice(1).toLowerCase()}
            image = {pokemon2.sprites.other.dream_world.front_default}
            hp = {pokemon2.stats[0].base_stat}
            attack = {pokemon2.stats[1].base_stat}
            defence = {pokemon2.stats[2].base_stat}
            speed = {pokemon2.stats[5].base_stat}
          />
        </div>
        <div className='menu-logs'>
          <div className='battle-menu'>
            <h3 className='battle-text' >Menu</h3>
            <div className='battle-menu-buttons default-border'>
              <Button className="item-button" children={"Home"}/>
              <Button className="item-button" children={"New Game"}/>
              <Button className="item-button" children={"New opponent"}/>
            </div>
          </div>
        <div></div>
          <div className='battle-logs'>
            <h3 className='battle-text'>Logs</h3>
            <div className='logs default-border'>
              {pokemon2.name}
            </div>
          </div>
        </div>

      </BattlePageComponent>
    )
}

const mapStateToProps = (state) =>{
  return {
    pokemon: state.pokemon,
    pokemon2: state.pokemon2
  }
}

export default connect(mapStateToProps, {fetchPokemon1, fetchPokemon2})(BattlePage)

const BattlePageComponent = styled.div `

  /* FIRST ROW */

  .battle-pokemon {
    display: flex;
    justify-content: space-around;
  }

  /* SECOND ROW */

  .menu-logs {
    display: flex;
    justify-content: space-around;
  }

  /* MENU WINDOW */

  .battle-menu {
    background-color: green;
    width: 230px;
    height: 265px;
    margin-top:40px;
  }

  .battle-menu-buttons {
    padding-top: 20px;
    padding-bottom: 10px;
  }

  .battle-menu-buttons {
    text-align:center;
  }

  /*LOGS WINDOW*/

  .battle-logs {
    background-color: purple;
    height: 305px;
    width: 550px;
    margin-top: 10px;
  }

  .logs {
    height: 240px;
    padding-top: 10px;
    padding-left: 10px;
  }

  /* MUTUAL */

  .battle-text {
    font-family: Bellota;
    font-size: 17px;
    margin-bottom: 5px;
    margin-left: 10px;
  }

  .default-border {
    border: 4px solid #FFCC00;
    border-radius: 18px;
    background-color: #FFF7D6;
  }
`