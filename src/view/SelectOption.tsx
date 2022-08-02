import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { setFiles } from '../store/files'
import store from '../store'

console.log('Initial state: ', store.getState())

export function Test () {
  const file = useSelector((state: any) => state.excel)
  console.log(file)
  const dispatch = useDispatch()

  /**
   * 전역 store 로 저장
   */
  const action = () => {
    dispatch(setFiles(['pepperoni']))
    console.log('After state ', store.getState())
  }

  return (
    <>
      <h1>PIZZA</h1>

      {/* { file.map((topping: string, index: number) => (
        <div key={topping + index}>{topping}</div>
      )) } */}

      <button onClick={action}>Add Peperoni</button>
    </>
  )
}

export default function App () {
  return (
    <div>
      이건이거애
      <Test />

      <Link to="/"><button> before </button></Link>
      <Link to="/chat"><button> chat </button></Link>
    </div>
  )
}
