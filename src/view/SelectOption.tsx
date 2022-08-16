import React from 'react'
import { Link } from 'react-router-dom'
import '../style/option.scss'

import Checkbox from '../component/Checkbox'
import { useDispatch, useSelector } from 'react-redux'
import { toggleShowComeOut, toggleUseMyId, setMyId } from '../store/option'

export default function SelectOption () {
  // eslint-disable-next-line
  const { showComeOut, useMyId, myId } = useSelector((state: any) => ({ showComeOut: state.options.showComeOut, useMyId: state.options.useMyId, myId: state.options.myId }))
  const dispatch = useDispatch()
  // console.log(showComeOut, useMyId, myId, '심신..')

  return (
    <div className="home">
      <h1>카카오톡 대화 변환기</h1>
      <h2>옵션 선택</h2>

      <div className="option-wrap">
        <div>
          <Checkbox
            label="입장 / 퇴장 여부도 포함할래요"
            onChange={ e => dispatch(toggleShowComeOut(e.target.checked)) }
          />
          <Checkbox
            label="'나' 를 구분할래요"
            onChange={ e => dispatch(toggleUseMyId(e.target.checked)) }
          />

          <input
            className="use-my-id"
            placeholder="나의 닉네임을 알려주세요"
            onChange={ e => dispatch(setMyId(e.target.value)) }
          />
        </div>
      </div>

      <div className="">
        <Link to="/"><button> ◀️ 파일선택 </button></Link>
        <Link to="/chat"><button> 변환하기 ▶️ </button></Link>
      </div>
    </div>
  )
}
