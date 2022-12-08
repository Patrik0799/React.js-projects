import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

const HealthBar = ({initialHP, newHP}) => {

    const [percentage, setPercentage] = useState();
    const [newwidth, setWidth] = useState();

    useEffect(() =>{
        percentageHealth(initialHP, newHP);
    })

    const percentageHealth = (initialHP, newHP) =>{
        const initialhp = initialHP;
        const newhp = newHP;
        let percentageHP = Math.round(newhp/initialhp * 100);
        setPercentage(percentageHP);
        setWidth(130 + percentageHP);
    }

  return (
    <HealthBarComponent>
        <h3>{percentage} %</h3>
        <div className='progress'>
            <div className='progress-done'>
                
            </div>
        </div>
    </HealthBarComponent>
  )
}

export default HealthBar

const HealthBarComponent = styled.div`

display: flex;
flex-direction:column;
justify-content:center;
align-items: center;

h3{
    margin-bottom: 2px;
}
.progress {
    background-color: grey;
    border: 3px solid black;
    border-radius: 20px;
    height: 12px;
    width: 230px;
}

.progress-done {
    background-color: yellow;
    border-radius: 20px;
    height: 100%;
    width: 230px;
}

`