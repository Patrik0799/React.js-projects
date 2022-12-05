import React from 'react'
import styled from "styled-components";
import PokemonCard from "./PokemonCard/PokemonCard";
import ArrowCard from './arrowCard.js/ArrowCard';
import Button from './Button/Button';

import { connect } from "react-redux";
import { fetchPokemon1, fetchPokemon2 } from '../actions';
import { bindActionCreators } from 'redux';

class BattlePage extends React.Component{

  state = {
    randID: []
  }

  /*randomTwoNumbers = () =>{
    const random = []
    for(let i = 0; i < 2; i++){
      random.push(Math.floor(Math.random() * (600 - 1) + 1))
    }

    return this.setState({
      randID: random
    })
  }*/

  componentDidMount() {
    this.props.fetchPokemon1(60);
    this.props.fetchPokemon2(27);
    //this.randomTwoNumbers;
  }

  render(){
    {/*console.log(this.props.pokemon.name);

    if(!this.props.pokemon.name){
      return null;
    }*/}
    console.log(this.props.pokemon.name);
    console.log(this.props.pokemon2.name);

    if(!this.props.pokemon2.name){
      return null;
    }
    return (
      <BattlePageComponent>
        <div className='battle-pokemon'>
          <PokemonCard 
            name = {this.props.pokemon.name.charAt(0).toUpperCase() + this.props.pokemon.name.slice(1).toLowerCase()}
            image = {this.props.pokemon.sprites.other.dream_world.front_default}
            hp = {this.props.pokemon.stats[0].base_stat}
            attack = {this.props.pokemon.stats[1].base_stat}
            defence = {this.props.pokemon.stats[2].base_stat}
            speed = {this.props.pokemon.stats[5].base_stat}
          />
          <ArrowCard />
          <PokemonCard 
            name = {this.props.pokemon2.name.charAt(0).toUpperCase() + this.props.pokemon2.name.slice(1).toLowerCase()}
            image = {this.props.pokemon2.sprites.other.dream_world.front_default}
            hp = {this.props.pokemon2.stats[0].base_stat}
            attack = {this.props.pokemon2.stats[1].base_stat}
            defence = {this.props.pokemon2.stats[2].base_stat}
            speed = {this.props.pokemon2.stats[5].base_stat}
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
              HELLO
            </div>
          </div>
        </div>

      </BattlePageComponent>
    )
  }
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