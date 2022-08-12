import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setFiles } from '../store/files'
import '../style/input.scss'

export default function Input () {
  const changeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input: HTMLInputElement | null = e.target

    const file: Blob | null = input.files ? input.files[0] : null
    if (!file) return

    const reader = new FileReader()
    reader.readAsText(file)

    reader.onload = (e: ProgressEvent<EventTarget>) => onLoadCallback(e, reader)
  }

  /**
   * 엑셀 업로드
   * @param {ProgressEvent<EventTarget>} e
   * @param {FileReader} reader
   */
  const onLoadCallback = (e: ProgressEvent<EventTarget>, reader: FileReader) => {
    // console.log(e, reader)

    const showComeOut = false // '들어왔습니다/나갔습니다' 사용할지 / 안할지 => 기본으로 사용 안함(false)
    const useMyId = false // 사용자 (나) 를 사용할 것인지 확인
    const myId = '또야' // 사용자 (나) 의 이름

    const raw = reader.result
    const chats = typeof raw === 'string' ? raw.split('"\n20') : raw
    // const columns: StringArray = chats ? chats?.splice(0, 1) : null
    if (chats instanceof ArrayBuffer || chats === null) return

    if (chats && Array.from(chats)?.length) console.log(chats.length)

    const result = []
    // console.log(chats, columns)
    const split = (data: string) => data.split(',')

    // 모든 csv 데이터 순회
    for (let i = 0; i < chats?.length; i++) {
      const chat = chats[i]

      const string = split(chat.replace(/"/g, ''))
      const content = string[2].replace(/\n/g, '&#13;')
      const object = { createTime: '20' + string[0], name: string[1], content, isMe: false }
      const showComeOutText = /들어왔습니다|나갔습니다/g.test(object.content)
      const idTest = new RegExp(myId) // 내 아이디와 일치하는 내용 확인

      // '들어왔습니다/나갔습니다' 사용 안하기
      // console.log(test, test ? object.content : '')
      if (!showComeOut && showComeOutText) continue

      // 사용자 (나) 를 사용할 경우, 일치하는 아이디를 확인하기
      if (useMyId && idTest.test(object.name)) object.isMe = true

      // console.log('아니 이건 나와야지')
      result.push(object)
    }

    console.log(result)
    return action(result)
  }

  /**
   * ㅁㄴㅇㄹ
   */
  const action = (data: object[]): void => {
    const test = 1
    if (test) return

    const file = useSelector((state: any) => state.files.excel)
    const dispatch = useDispatch()
    dispatch(setFiles(data))
    console.log(file)
  }

  return (
    <div className="kakao-file-upload">
      <label className="input-file-button" htmlFor="input-file">
        업로드
      </label>

      <input
        type="file"
        id="input-file"
        style={{ display: 'none' }}
        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
        onChange={ changeEvent }
      />
    </div>
  )
}
