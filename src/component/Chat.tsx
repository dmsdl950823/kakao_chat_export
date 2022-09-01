import React from 'react'
// import React from 'react'
import '../style/chartlist.scss'

type AppProps = {
  id: number
  name: string
  content: string
  createTime: string
  isMe?: boolean | undefined
  isComeOutText?: boolean | undefined
}

export default function Chat ({ item }: { item: AppProps }) {
  const { name, content, isMe, id, isComeOutText } = item
  const label = `ID_${id}`

  // 채팅이 나인지 확인
  const wrapper = isMe ? '-chat -me' : '-chat'
  const image = isMe ? null : (<div className="-image"></div>)
  const labelClassName = isMe ? '-checkbox-label -me' : '-checkbox-label -default'

  // 'check' 여부
  // const [checked, setChecked] = useState<boolean>(false)
  // eslint-disable-next-line
  const onChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setChecked(e.target.checked)
    // console.log(checked, '진자 붕신')
  }

  /**
   * "~들어왔습니다 / 나갔습니다" 표기일 경우
   * @returns
   */
  const Comeout = () => (
    <div className="-comeout">
      <span>{ content }</span>
    </div>
  )

  /**
   * 카톡 목록
   * @returns
   */
  const Chat = () => (
    <div className={ wrapper }>
        { image }

      <div className="-profile">
        <span className="name">{name}</span>

        <div className="-textarea">
          <textarea
            style={ { height: '200px' } }
            value={ content }
            readOnly
          />
        </div>
      </div>
    </div>
  )

  /**
   * [Checkbox] 인풋 요소 (보이지 않게 숨기기)
   * @returns
   */
  const Checkbox = () => (
    <div className="-checkbox-wrap">
      <input
        className="-input"
        type="checkbox"
        id={ label }
        onChange={ e => onChecked(e) }
      />
      <span className="checkmark"></span>
    </div>
  )

  const List = () => (
    <li className="-chat-list">
      <label
        htmlFor={ label }
        className={ labelClassName }
      >
        { isComeOutText ? <Comeout /> : <Chat /> }
        <Checkbox />
      </label>
    </li>
  )

  return (
    <List />
  )
}
