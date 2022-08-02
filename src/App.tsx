import React from 'react'

// import { Routes, Route, Link } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import SelectOption from './view/SelectOption'

import './App.css'
import './style/reset.css'
import Home from './view/Home'

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<SelectOption />} />
      </Routes>
    </div>
  )
}

export default App
