import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Input from '../component/Input'

export default function Home () {
  // eslint-disable-next-line
  const savedFile = useSelector((state: any) => ({ file: state.files.raw, name: state.files.name }))
  console.log(savedFile)

  return (
    <div className="home">
      <h1>카카오톡 대화 변환기</h1>

      <Input />
      <Link to="option">
        <button
          // disabled={savedFile.file.length === 0}
        >
          다음
        </button>
      </Link>
    </div>
  )
}
