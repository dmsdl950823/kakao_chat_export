import React from 'react'
import '../style/chartlist.css'

type AppProps = {
  name: string
  content: string
  me: boolean
}

export default function ChatList ({ name, content, me }: AppProps) {
  const setStyle = () => {
    return { height: '200px' }
  }

  // 채팅이 나인지 확인
  const setListType = (isMe: boolean) => {
    return {
      className: isMe ? '-list -me' : '-list',
      name: isMe ? null : <span className="name">{name}</span>,
      image: isMe ? null : <div className="-image"></div>
    }
  }

  return (
    <li className={setListType(me).className}>
        { setListType(me).image }

      <div className="-profile">
        { setListType(me).name }

        <div className="-chat">
          <textarea
            style={ setStyle() }
            value={ content }
            readOnly
          />
        </div>
      </div>
    </li>
  )
}
