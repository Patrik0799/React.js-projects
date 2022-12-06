import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import Arrow from "../../assets/arrow.svg";
import Button from "../Button/Button";

import { connect } from 'react-redux';
import { setToLeftPokemon, setToRightPokemon } from '../../actions';

const ArrowCard = ({
  LeftPokemonSpeed, 
  RightPokemonSpeed,
  LeftPokemonAttack,
  RightPokemonAttack,
  LeftPokemonDefence,
  RightPokemonDefence, 
  setToLeftPokemon, 
  setToRightPokemon, 
  direction
  }) => {

  useEffect(() =>{
    if(LeftPokemonSpeed > RightPokemonSpeed){
      setToRightPokemon();
    }
    else{
      setToLeftPokemon();
    }
  }, [])

  const RightAttacksLeft = () => {
    {/*LIJEVI NAPADA DESNOM*/}
    const ATT = RightPokemonAttack/2;
    const DEF = LeftPokemonDefence;
    const damageDealtToLeft = ATT - DEF/100 * ATT;


    setToRightPokemon();
    console.log(damageDealtToLeft);
  }

  const LeftAttacksRight = () => {
    {/*DESNI NAPADA LIJEVOG*/}

    const ATT = LeftPokemonAttack/2;
    const DEF = RightPokemonDefence;
    const damageDealtToRight = ATT - DEF/100 * ATT;

    setToLeftPokemon();
    console.log(damageDealtToRight);
  }

  return (
    <ArrowCardComponent>
        <img className={`${direction==0 ? "arrow-left" : "arrow-right"}`} src={Arrow} alt=""/>
        <Button children={"Attack"} onClick = {direction == 0 ? RightAttacksLeft : LeftAttacksRight}/>
    </ArrowCardComponent>
  )
}

  const mapStateToProps = (state) =>{
    return{
      direction: state.direction
    }
  } 
export default connect(mapStateToProps, {setToLeftPokemon, setToRightPokemon})(ArrowCard)

const ArrowCardComponent = styled.div `
    background-color: yellow;
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