import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../view/Home'
import SelectOption from '../view/SelectOption'
import ChatList from '../view/ChatList'

const routes = [
  { path: '/', element: <Home /> },
  { path: 'option', element: <SelectOption /> },
  { path: 'chat', element: <ChatList /> }
]

const Test: React.FC = () => {
  return (
    <Routes>
      { routes.map(({ path, element }) => <Route key={path} path={path} element={element} />) }
    </Routes>
  )
}

export default Test
