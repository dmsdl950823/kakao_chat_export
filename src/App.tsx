import React from 'react'

import { Routes, Route } from 'react-router-dom'
import SelectOption from './view/SelectOption'

import './App.css'
import './style/reset.css'
import Home from './view/Home'

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<SelectOption />} />
        <Route path="chat" element={<SelectOption />} />
      </Routes>
    </div>
  )
}

export default App
