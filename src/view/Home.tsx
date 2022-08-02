import React from 'react'
import Input from '../component/Input'
import { Link } from 'react-router-dom'

export default function Home () {
  return (
    <div>
      <Input />
      홈홈

      <Link to="/about"><button> next </button></Link>
    </div>
  )
}
