import React from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import styled from 'styled-components';
import image from "./assets/background_v2.jpg";

import StartPage from './components/StartPage'
import BattlePage from './components/BattlePage'

const App = () => {
  return (
    <AppComponent /*style={{ background:`url(${image})` }}*/>
      <Router>
        <Routes>
          <Route path='/' element={<StartPage />} />
          <Route path='/battle' element={<BattlePage />} />
        </Routes>
      </Router>
    </AppComponent>
  )
}

export default App

const AppComponent = styled.div`
  position:absolute;
  top:0px;
  right:0px;
  bottom:0px;
  left:0px;
`
