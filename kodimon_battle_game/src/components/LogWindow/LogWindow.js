import React, {useState, useEffect} from 'react'
import styled from "styled-components";
import { connect } from 'react-redux';

const LogWindow = ({rightToleftDMG, leftTorightDMG, LeftPokemonName, RightPokemonName, logAdd, direction}) => {

    const [logs, setLogs] = useState([]);

    const handleAdd = () =>{
        const history = [...logs, []];
        setLogs(history);
    }

    useEffect(()=>{
      if(logAdd != 0){
        handleAdd();
        console.log(logAdd);
      }
    },[logAdd])

    
    return (
        <LogsWindowComponent>
            <h3 className='battle-text'>Logs</h3>
            <div className='logs default-border'>
                {logs.map((log, index)=>{
                      return(
                        <h4 key={index}>2 napada 1</h4>
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
        logAdd: state.logAdd
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