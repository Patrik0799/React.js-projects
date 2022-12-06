import React from 'react'
import styled from "styled-components";
import Button from '../Button/Button';

const BattleMenu = () => {
  return (
    <BattleMenuComponent>
        <h3 className='battle-text' >Menu</h3>
        <div className='battle-menu-buttons default-border'>
            <Button className="item-button" children={"Home"}/>
            <Button className="item-button" children={"New Game"}/>
            <Button className="item-button" children={"New opponent"}/>
        </div>
    </BattleMenuComponent>
  )
}

export default BattleMenu

const BattleMenuComponent = styled.div`

    background-color: green;
    width: 230px;
    height: 265px;
    margin-top:40px;
  

  .battle-menu-buttons {
    padding-top: 20px;
    padding-bottom: 10px;
  }

  .battle-menu-buttons {
    text-align:center;
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
`