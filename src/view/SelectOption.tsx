import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { setData } from '../store/files'
// import store from '../store'

// ---
// console.log('Initial state: ', store.getState())

export function Test () {
  // eslint-disable-next-line
  const file = useSelector((state: any) => state.files.data)
  const dispatch = useDispatch()

  /**
   * 전역 store 로 저장
   */
  const action = () => {
    dispatch(setData(['테스티']))
    // console.log('After state ', store.getState())
  }

  return (
    <>
      <h1>PIZZA 목록</h1>

      {
        file.map((excel: string, index: number) => (
          <div key={excel + index}>{excel}</div>
        ))
      }

      <button onClick={action}>Add Peperoni</button>
    </>
  )
}

export default function App () {
  return (
    <div className="home">
      <Test />

      <Link to="/"><button> before </button></Link>
      <Link to="/chat"><button disabled> chat </button></Link>
    </div>
  )
}
