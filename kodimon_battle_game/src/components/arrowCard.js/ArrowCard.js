import React from 'react'
import styled from "styled-components";
import Arrow from "../../assets/arrow.svg";
import Button from "../Button/Button";

const ArrowCard = () => {
  return (
    <ArrowCardComponent>
        <img className="arrow" src={Arrow} alt=""/>
        <Button children={"Attack"}/>
    </ArrowCardComponent>
  )
}

export default ArrowCard

const ArrowCardComponent = styled.div `
    background-color: yellow;
    width: 200px;
    height: 100px;
    text-align:center;
    margin-top: 230px;

    .arrow {
        padding-bottom: 20px;
    }
    
`