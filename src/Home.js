export default function Home () {
  const changeEvent = (e) => {
    const file = e.target.files[0]

    const reader = new FileReader()
    reader.readAsText(file)
    reader.onload = (e) => onLoadCallback(e, reader)
  }

  const onLoadCallback = (e, reader) => {
    // console.log(e, reader)

    const showComeOut = false // '들어왔습니다/나갔습니다' 사용할지 / 안할지 => 기본으로 사용 안함(false)
    const useMyId = false // 사용자 (나) 를 사용할 것인지 확인
    const myId = '또야' // 사용자 (나) 의 이름

    const split = data => data.split(',')

    const raw = reader.result.split('"\n20')
    // const columns = raw.splice(0, 1)
    const result = []
    // console.log(raw, columns)

    // 모든 csv 데이터 순회
    for (let i = 0; i < raw.length; i++) {
      const chat = raw[i]
     
      const string = split(chat.replace(/"/g, ''))
      const object = { createTime: '20' + string[0], name: string[1], content: string[2], isMe: false}
      const test = /들어왔습니다|나갔습니다/g.test(object.content)
      const idTest = new RegExp(myId) // 내 아이디와 일치하는 내용 확인
      
      // '들어왔습니다/나갔습니다' 사용 안하기
      // console.log(test, test ? object.content : '')
      if (!showComeOut && test) continue

      // 사용자 (나) 를 사용할 경우, 일치하는 아이디를 확인하기
      if (useMyId && idTest.test(object.name)) object.isMe = true

      // console.log('아니 이건 나와야지')
      result.push(object)
    }


    console.log(result)

  }

  return <input type="file" onChange={changeEvent}/>
}
