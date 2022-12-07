import React, {useState, useEffect} from 'react'
import styled from "styled-components";
import { connect } from 'react-redux';

import LogMessage from '../LogMessage/LogMessage';

const LogWindow = ({rightToleftDMG, leftTorightDMG, LeftPokemonName, RightPokemonName, logAdd, direction, pokemonHP, pokemon2HP, miss, counter}) => {

    const [logs, setLogs] = useState([{}]);
    
    const removeFromLogs = () => {
      const copyLogs = logs;
      copyLogs.splice(1,1);
      setLogs(copyLogs);
    }

    const addToLogs = () =>{

      const copyLogs = logs;

      if(direction == 0 && miss == 0){
        copyLogs.push({
          PokemonWhoAttack: RightPokemonName, //LeftPokemonName
          PokemonWhoDefends: LeftPokemonName, //RightPokemonName
          Action: "attacked",
          Text: `for ${rightToleftDMG} dmg.`
          //DamageDealt: rightToleftDMG //leftTorightDMG
        })
      }else if(miss == 1 && direction == 0){
        copyLogs.push({
          PokemonWhoAttack: RightPokemonName, 
          PokemonWhoDefends: LeftPokemonName, 
          Action: "MISSED",
          Text: ""
          //DamageDealt: rightToleftDMG //leftTorightDMG
        })
      }else if(miss == 1 && direction == 1){
        copyLogs.push({
          PokemonWhoAttack: LeftPokemonName, 
          PokemonWhoDefends: RightPokemonName,
          Action: "MISSED",
          Text: ""
          //DamageDealt: leftTorightDMG //rightToleftDMG
        })
      }else if(pokemonHP == 0){
        copyLogs.push({
          PokemonWhoAttack: RightPokemonName, 
          PokemonWhoDefends: "", 
          Action: "DIED",
          Text: ""
          //DamageDealt: rightToleftDMG //leftTorightDMG
        })
      }else if(pokemon2HP == 0){
        copyLogs.push({
          PokemonWhoAttack: LeftPokemonName, 
          PokemonWhoDefends: "",
          Action: "DIED",
          Text: ""
          //DamageDealt: leftTorightDMG //rightToleftDMG
        })
      }
      else{
        copyLogs.push({
          PokemonWhoAttack: LeftPokemonName, //RightPokemonName
          PokemonWhoDefends: RightPokemonName, //LeftPokemonName
          Action: "attacked",
          Text: `for ${leftTorightDMG} dmg.`
          //DamageDealt: leftTorightDMG //rightToleftDMG
        })
      }

      setLogs(copyLogs);
    }

    useEffect(()=>{
      if(logAdd > 0){
        addToLogs();
        //console.log("logAdd value: ", logAdd);
        console.log("RIGHT TO LEFT DMG: ", rightToleftDMG);
        console.log("LEFT TO RIGHT DMG: ", leftTorightDMG);
        console.log("pokemonHP: ", pokemonHP);
        console.log("pokemon2HP: ", pokemon2HP);
        //console.log(logs);
      }

      if(counter > 9){
        console.log("AJMOO");
        removeFromLogs();
      }

    },[logAdd])

    return (
        <LogsWindowComponent>
            <h3 className='battle-text'>Logs</h3>
            <div className='logs default-border'>
                {logs.slice(1).map((log, index)=>{
                    return(
                      <LogMessage
                          key={index} 
                          PokemonWhoAttack={log.PokemonWhoAttack}
                          PokemonWhoDefends={log.PokemonWhoDefends}
                          Action={log.Action}
                          Text={log.Text}
                          //DamageDealt={log.DamageDealt}
                      />
                    )
                })}
                {/*<h4>{rightToleftDMG}</h4>
                <h4>{leftTorightDMG}</h4>*/}
            </div>
        </LogsWindowComponent>
  )
}

const mapStateToProps = (state) => {
    return {
        rightToleftDMG: state.rightToleftDMG,
        leftTorightDMG: state.leftTorightDMG,
        direction: state.direction,
        logAdd: state.logAdd,
        pokemonHP: state.pokemonHP,
        pokemon2HP: state.pokemon2HP,
        miss: state.miss,
        counter: state.counter
    }
}
export default connect(mapStateToProps)(LogWindow)

const LogsWindowComponent = styled.div`

    background-color: purple;
    height: 305px;
    width: 550px;
    margin-top: 10px;
  
  .logs {
    height: 240px;
    padding-top: 10px;
    padding-left: 10px;
  }

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

  h4 {
    margin: 2px 2px;
  }
`