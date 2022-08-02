import React from 'react'
import '../style/chartlist.scss'

type AppProps = {
  name: string
  content: string
  me: boolean | undefined
}

export default function Chat ({ name, content, me }: AppProps) {
  const setStyle = () => {
    return { height: '200px' }
  }

  // 채팅이 나인지 확인
  const setListType = (isMe: boolean | undefined) => {
    return {
      className: isMe ? '-list -me' : '-list',
      image: isMe ? null : <div className="-image"></div>
    }
  }

  return (
    <li className={setListType(me).className}>
        { setListType(me).image }

      <div className="-profile">
        {/* { setListType(me).name } */}
        <span className="name">{name}</span>

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
