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

/**
 * 구현해야할것
 * 1. 날짜 지정 기능
 * 2. Throttle 해서 필요한 데이터만 노출
 * 3.
 */
