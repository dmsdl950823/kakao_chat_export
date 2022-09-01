import React from 'react'
import '../style/option.scss'

import Checkbox from '../component/Checkbox'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { toggleShowComeOut, toggleUseMyId, setMyId } from '../store/option'

import 'antd/dist/antd.min.css'
import { message } from 'antd'
// 날짜 range
// import type { RangePickerProps } from 'antd/es/date-picker'
// import { DatePicker } from 'antd'
// import moment from 'moment'
// const { RangePicker } = DatePicker

// const rangePicker = () => {
//   const disabledDate: RangePickerProps['disabledDate'] = current => {
//     // Can not select days before today and today
//     console.log(raw)
//     return current && current < moment().endOf('day')
//   }

//   return (
//       <div className="option-selected-date">
//         <RangePicker disabledDate={disabledDate}/>
//       </div>
//   )
// }

export default function SelectOption () {
  // eslint-disable-next-line
  const { setDate, showComeOut, useMyId, myId } = useSelector((state: any) => ({ showComeOut: state.options.showComeOut, useMyId: state.options.useMyId, myId: state.options.myId, setDate: state.options.setDate }))
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // '나' 를 구분하는 기능을 체크한경우 아이디 작성되었는지 여부 검사
  const transferFileAction = () => {
    let moveTo = true
    if (useMyId === true) if (!myId) moveTo = false

    if (moveTo) return navigate('/chat', { replace: true })
    else message.error('닉네임을 입력해주세요.')
  }

  /**
   * 닉네임 적는 input 입력
   * @returns
   */
  const myNameInput = () => (
    <input
      className="use-my-id"
      placeholder="'나'의 닉네임을 알려주세요"
      onChange={ e => dispatch(setMyId(e.target.value)) }
    />
  )

  return (
    <div className="home">
      <h1>카카오톡 대화 변환기</h1>
      <h2>옵션 선택</h2>

      <div className="option-wrap">
        <div>
          {/* 날짜 지정하는칸 */}
          {/* <Checkbox
            label="날짜를 지정할게요"
            onChange={ e => dispatch(toggleSetDate(e.target.checked)) }
          /> */}

          {/* { setDate ? rangePicker() : null } */}

          <Checkbox
            label="입장 / 퇴장 여부도 포함할래요"
            onChange={ e => dispatch(toggleShowComeOut(e.target.checked)) }
          />
          <Checkbox
            label="'나' 를 구분할래요"
            onChange={ e => dispatch(toggleUseMyId(e.target.checked)) }
          />

          { useMyId ? myNameInput() : null }
        </div>
      </div>

      <div className="">
        <button onClick={ () => navigate('/', { replace: true })} > ◀️ 파일선택 </button>
        <button onClick={ transferFileAction }> 변환하기 ▶️ </button>
      </div>
    </div>
  )
}
