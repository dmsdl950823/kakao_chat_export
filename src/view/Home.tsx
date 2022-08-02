import React from 'react'
import '../style/common.scss'
import { Link } from 'react-router-dom'

import Input from '../component/Input'

export default function Home () {
  return (
    <div className="home">
      <h1>TEST</h1>

      <Input />
      <Link to="option">
        <button> next </button>
      </Link>
    </div>
  )
}
