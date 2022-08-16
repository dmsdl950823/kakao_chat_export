import React from 'react'

// import './style/common.scss'
import './style/common.css'
import './style/reset.css'
import Routes from './routes'

/**
 * 순서
 * 1) Home
 * 2) SelectionOption
 * 3) ChatList
 */
const App: React.FC = () => {
  return (
    <div className="App">
      <Routes />
    </div>
  )
}

export default App
