import React, { useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import '../style/chartlist.scss'

type ChatProps = {
  id: number
  name: string
  content: string
  createTime: string
  isMe?: boolean | undefined
  isComeOutText?: boolean | undefined
  useCheckbox?: boolean | undefined
}

export default function Chat ({ item, onChecked }: { item: ChatProps, onChecked: (value: boolean) => void }) {
  const { name, content, isMe, id, isComeOutText } = item
  const label = `ID_${id}`

  // chat에 체크박스를 사용할것인지?
  // eslint-disable-next-line
  const { useCheckbox } = useSelector((state: any) => ({ useCheckbox: state.chatOptions.useCheckbox }))

  // 채팅이 나인지 확인
  const wrapper = isMe ? '-chat -me' : '-chat'
  const image = isMe ? null : (<div className="-image"></div>)
  const labelClassName = isMe ? '-checkbox-label -me' : '-checkbox-label -default'

  // 'check' 여부
  // eslint-disable-next-line
  // const [checked, setChecked] = useState<boolean>(false)
  const onCheckedEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setChecked(e.target.checked)
    onChecked(e.target.checked)
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
  const Chat = () => {
    const myRef = useRef<HTMLTextAreaElement>(null)

    // textarea 자동 높이 설정
    useEffect(() => {
      if (myRef.current !== null) {
        myRef.current.style.height = (myRef.current.scrollHeight) + 'px'
      }
    }, [myRef])

    return (
      <div className={ wrapper }>
          { image }

        <div className="-profile">
          <span className="name">{name}</span>

          <div className="-textarea">
          <textarea
            ref={ myRef }
            value={ content }
            readOnly
          />
          </div>
        </div>
      </div>
    )
  }

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
        onChange={ e => onCheckedEvent(e) }
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
        { useCheckbox ? <Checkbox /> : null}
      </label>
    </li>
  )

  return (
    <List />
  )
}
