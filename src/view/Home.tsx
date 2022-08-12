import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import '../style/common.scss'

import Input from '../component/Input'

export default function Home () {
  // eslint-disable-next-line
  const savedFile = useSelector((state: any) => ({ file: state.files.excel, name: state.files.name }))
  console.log(savedFile)

  return (
    <div className="home">
      <h1>카카오톡 대화 변환기</h1>

      {/* { savedFile } */}

      <Input />
      <Link to="option">
        <button> 다음 </button>
      </Link>
    </div>
  )
}
