import React, { useEffect } from 'react'
import Chat from '../component/Chat'
import { useSelector } from 'react-redux'
import { useNavigate, useLocation } from 'react-router'

type Ingredient = {
  showComeOut: boolean
  useMyId: boolean
  myId: string
  chats: string
}

type ChatType = {
  id: number
  name: string
  content: string
  createTime: string
  isMe?: boolean | undefined
  isComeOutText?: boolean | undefined
}

/**
 * String RAW 엑셀파일 데이터를
 * @param param0
 */
const setChatList = ({ showComeOut, useMyId, myId, chats }: Ingredient) => {
  // console.log(showComeOut, useMyId, myId, chats)
  // if (chats && Array.from(chats)?.length) console.log(chats.length)

  const result = []
  const split = (data: string) => data.split(',')

  // 모든 csv 데이터 순회
  for (let i = 0; i < chats?.length; i++) {
    const chat = chats[i]

    const string = split(chat.replace(/"/g, ''))
    const content = string[2].replace(/\n/g, '&#13;')
    const object: ChatType = { id: i, createTime: '20' + string[0], name: string[1], content, isMe: false }
    const showComeOutText = /들어왔습니다|나갔습니다/g.test(object.content)
    const idTest = new RegExp(String(myId)) // 내 아이디와 일치하는 내용 확인

    // '들어왔습니다/나갔습니다' 사용 안하기 (넘어가기)
    if (!showComeOut && showComeOutText) continue
    // 사용해서 해당할 때만 true 로 설정하기
    if (showComeOut && showComeOutText) object.isComeOutText = true

    // 사용자 (나) 를 사용할 경우, 일치하는 아이디를 확인하기
    if (useMyId && idTest.test(object.name)) object.isMe = true

    result.push(object)
  }

  // console.log('@@ result :: \n', result)
  return result
}

/**
 * option 설정 (체크박스 등)
 * @returns
 */
function Options () {
  return (
    <div className="-chat-list-option">
      <div className="-full-width">
        ㅇㅅㅇㅇㅅㅇ
      </div>
    </div>
  )
}

export default function Home () {
  // eslint-disable-next-line
  const { showComeOut, useMyId, myId, raw } = useSelector((state: any) => ({
    showComeOut: state.options.showComeOut, // '들어왔습니다/나갔습니다' 사용할지 / 안할지 => 기본으로 사용 안함(false)
    useMyId: state.options.useMyId, // 사용자 (나) 를 사용할 것인지 확인 => 기본적으로 사용 안함 (false)
    myId: state.options.myId, // 사용자 (나) 의 이름
    raw: state.files.raw // 저장된 파일
  }))

  const chats = typeof raw === 'string' ? raw.split('"\n20')?.splice(1) : raw // column 제거
  const numbers = setChatList({ showComeOut, useMyId, myId, chats })

  const listItems = numbers.map((data: ChatType) => {
    return (
      <Chat
        key={ `test_${data.id}` }
        item={ data }
      />
    )
  })

  // 데이터가 없으면 다시 초기화
  const navigate = useNavigate()
  const { state } = useLocation()
  useEffect(() => {
    if (chats === null) {
      // alert('데이터가 없습니다. 초기화면으로 돌아갑니다.')
      navigate('/', { replace: true })
    }
  }, [state])

  return (
    <div className='chat-list-wrapper'>
      <Options />

      <div className="chat-list-wrap">
        <ul className="chat-list-wrap-center">
          { listItems }
        </ul>
      </div>

      <div className="ad">광고</div>
    </div>
  )
}
