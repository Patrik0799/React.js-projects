import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import Arrow from "../../assets/arrow.svg";
import Button from "../Button/Button";

import { connect } from 'react-redux';
import { setToLeftPokemon, setToRightPokemon, initialSetLeftPokemonHP, newSetLeftPokemonHP, initialSetRightPokemonHP, newSetRightPokemonHP, logTo1, logTo2, initialLeftToRightDMG, initialRightToLeftDMG, setMissed, setCounter } from '../../actions';

const ArrowCard = ({
  LeftPokemonSpeed, 
  RightPokemonSpeed,
  LeftPokemonAttack,
  RightPokemonAttack,
  LeftPokemonDefence,
  RightPokemonDefence,
  LeftPokemonHP,
  RightPokemonHP,
  setToLeftPokemon, 
  setToRightPokemon,
  initialSetLeftPokemonHP,
  newSetLeftPokemonHP,
  initialSetRightPokemonHP,
  newSetRightPokemonHP,
  direction,
  pokemonHP,
  pokemon2HP,
  logTo1,
  logTo2,
  initialLeftToRightDMG,
  initialRightToLeftDMG,
  miss,
  setMissed,
  setCounter,
  counter
  }) => {


  useEffect(() =>{

    if(LeftPokemonSpeed > RightPokemonSpeed){
      setToRightPokemon();
    }
    else{
      setToLeftPokemon();
    }

    logTo1(1);
    initialSetLeftPokemonHP(LeftPokemonHP);
    initialSetRightPokemonHP(RightPokemonHP);

    initialRightToLeftDMG(damageCalculator(RightPokemonAttack, LeftPokemonDefence));
    initialLeftToRightDMG(damageCalculator(LeftPokemonAttack, RightPokemonDefence));
    
  }, [])

  const damageCalculator = (attack, defence) =>{
    const ATT = attack/2;
    const DEF = defence;
    const toMissNumber = Math.floor(Math.random() * (5 - 1 + 1) + 1);
    let damageDealt = (ATT - DEF/100 * ATT).toFixed(2);

    if(damageDealt < 0){
      damageDealt = 0;
    }
    
    if(toMissNumber === 1){
      setMissed(1);
      damageDealt = 0;
    } else {
      setMissed(0);
    }
    
    
    return damageDealt
    
  }

  {/*LIJEVI NAPADA DESNOM*/}
  const RightAttacksLeft = () => {
    
    const damageDealtToLeft = damageCalculator(RightPokemonAttack, LeftPokemonDefence);
    newSetLeftPokemonHP(damageDealtToLeft);
    setToRightPokemon();
    logTo1(2);
    setCounter();
    //console.log(damageDealtToLeft);
  }

  {/*DESNI NAPADA LIJEVOG*/}
  const LeftAttacksRight = () => {

    const damageDealtToRight = damageCalculator(LeftPokemonAttack, RightPokemonDefence);
    newSetRightPokemonHP(damageDealtToRight);
    setToLeftPokemon();
    logTo2(3);
    setCounter();
    //console.log(damageDealtToRight);
  }

  return (
    <ArrowCardComponent>
        {/*<h4>LEFT: {pokemonHP}</h4>
        <h4>RIGHT: {pokemon2HP}</h4>*/}
        <img className={`${direction==0 ? "arrow-left" : "arrow-right"}`} src={Arrow} alt=""/>
        <Button children={"Attack"} onClick = {direction == 0 ? RightAttacksLeft : LeftAttacksRight}/>
    </ArrowCardComponent>
  )
}

  const mapStateToProps = (state) =>{
    return{
      direction: state.direction,
      pokemonHP: state.pokemonHP,
      pokemon2HP: state.pokemon2HP,
      miss: state.miss,
      counter: state.counter
    }
  } 
export default connect(mapStateToProps,
   {setToLeftPokemon, 
    setToRightPokemon, 
    initialSetLeftPokemonHP, 
    newSetLeftPokemonHP, 
    initialSetRightPokemonHP, 
    newSetRightPokemonHP, 
    logTo1, 
    logTo2, 
    initialLeftToRightDMG, 
    initialRightToLeftDMG,
    setMissed,
    setCounter
  })(ArrowCard)

const ArrowCardComponent = styled.div `
    //background-color: yellow;
    width: 200px;
    height: 120px;
    text-align:center;
    margin-top: 230px;

    .arrow-left{
      padding-bottom: 20px;
      padding-top:20px
    }

    .arrow-right{
      transform: rotate(180deg);
      padding-bottom: 20px;
      padding-top:20px
    }
    
`