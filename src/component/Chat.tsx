import React, { useState } from 'react'
import '../style/chartlist.scss'

type AppProps = {
  id: number
  name: string
  content: string
  createTime: string
  isMe?: boolean | undefined
}

export default function Chat ({ item }: {item: AppProps}) {
  const { name, content, isMe, id } = item

  // 채팅이 나인지 확인
  const setListType = (isMe: boolean | undefined) => {
    return {
      className: isMe ? '-list -me' : '-list',
      image: isMe ? null : <div className="-image"></div>,
      checkboxWrap: isMe ? '-checkbox-wrap -me' : '-checkbox-wrap -default',
      checkbox: isMe ? '-checkbox -me' : '-checkbox -default'
    }
  }

  // 'check' 여부
  const [checked, setChecked] = useState<boolean>(false)
  const onChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked)
    // console.log(e.target.checked, '진자 붕신')
  }

  const List = () => (
    <li className={ setListType(isMe).className }>
        { setListType(isMe).image }
        {checked}

      <div className="-profile">
        <span className="name">{name}</span>

        <div className="-chat">
          <textarea
            style={ { height: '200px' } }
            value={ content }
            readOnly
          />

          <div className={ setListType(isMe).checkbox }>
          </div>
        </div>
        {/* /. 채팅 */}
      </div>
    </li>
  )

  const Checkbox = () => (
    <>
      <label
        htmlFor={`ID_${id}`}
        className={ setListType(isMe).checkboxWrap }
      >
        <List />
        <input
          type="checkbox"
          id={`ID_${id}`}
          onChange={e => onChecked(e)}
        />
        {/* style={{ display: 'none' }} */}
      </label>
    </>
  )

  return (
    <Checkbox />
  )
}
