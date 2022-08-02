import React from 'react'
// import Input from '../component/Input'
import { Link } from 'react-router-dom'

export default function Home () {
  return (
    <div>
      {/* <Input></Input> */}
      안녕하신가요

      <Link to="/about"><button> next </button></Link>
    </div>
  )
}
