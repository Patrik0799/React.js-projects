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
          PokemonWhoAttack: RightPokemonName, 
          PokemonWhoDefends: LeftPokemonName,
          Action: "attacked",
          Text: `for ${rightToleftDMG} dmg.`
        })
      }else if(miss == 1 && direction == 0){
        copyLogs.push({
          PokemonWhoAttack: RightPokemonName, 
          PokemonWhoDefends: LeftPokemonName, 
          Action: "MISSED",
          Text: ""
        })
      }else if(miss == 1 && direction == 1){
        copyLogs.push({
          PokemonWhoAttack: LeftPokemonName, 
          PokemonWhoDefends: RightPokemonName,
          Action: "MISSED",
          Text: ""
        })
      }else if(pokemonHP == 0){
        copyLogs.push({
          PokemonWhoAttack: RightPokemonName, 
          PokemonWhoDefends: "", 
          Action: "DIED",
          Text: ""
        })
      }else if(pokemon2HP == 0){
        copyLogs.push({
          PokemonWhoAttack: LeftPokemonName, 
          PokemonWhoDefends: "",
          Action: "DIED",
          Text: ""
        })
      }
      else{
        copyLogs.push({
          PokemonWhoAttack: LeftPokemonName, 
          PokemonWhoDefends: RightPokemonName,
          Action: "attacked",
          Text: `for ${leftTorightDMG} dmg.`
        })
      }

      setLogs(copyLogs);
    }

    useEffect(()=>{
      if(logAdd > 0){
        addToLogs();
      }
      if(counter > 9){
        removeFromLogs();
      }
    },[logAdd])

    useEffect(()=>{
      setLogs([{}]);
    }, [RightPokemonName, LeftPokemonName])

    console.log(counter);

    return (
        <LogsWindowComponent>
            <h3 className='battle-text'>Logs</h3>
            <div className='logs default-border'>
                {logs.map((log, index)=>{
                    return(
                      <LogMessage
                          key={index} 
                          PokemonWhoAttack={log.PokemonWhoAttack}
                          PokemonWhoDefends={log.PokemonWhoDefends}
                          Action={log.Action}
                          Text={log.Text}
                      />
                    )
                })}
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

    //background-color: purple;
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