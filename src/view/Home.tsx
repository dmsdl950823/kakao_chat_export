import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Input from '../component/Input'

export default function Home () {
  // eslint-disable-next-line
  const { file } = useSelector((state: any) => ({ file: state.files.raw, name: state.files.name }))

  return (
    <div className="home">
      <h1>카카오톡 대화 변환기</h1>
      <h2>파일 선택</h2>

      <Input />
      <Link to="option">
        <button disabled={ !file }>
          다음
        </button>
      </Link>
    </div>
  )
}
