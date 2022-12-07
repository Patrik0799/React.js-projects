import React from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

import StartPage from './components/StartPage'
import BattlePage from './components/BattlePage'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<StartPage />} />
          <Route path='/battle' element={<BattlePage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App