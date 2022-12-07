import React from 'react';
import styled from 'styled-components';

const LogMessage = ({PokemonWhoAttack, PokemonWhoDefends, DamageDealt, Action, Text}) => {
  return (
    <LogMessageComponent>
        <h4>{PokemonWhoAttack} {Action} {PokemonWhoDefends} {Text}{/*for {DamageDealt} dmg.*/}</h4>
    </LogMessageComponent>
  )
}

export default LogMessage

const LogMessageComponent = styled.div`

h4 {
    font-family: Bellota;
    font-size: 16px;
    margin-bottom: 5px;
    margin-left: 10px;
  }

`