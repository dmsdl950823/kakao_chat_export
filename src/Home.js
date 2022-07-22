export default function Home () {
  const changeEvent = (e) => {
    const file = e.target.files[0]

    const reader = new FileReader()
    reader.readAsText(file)
    reader.onload = () => {
      // 콜백지옥 빠져나가기 ㄷㄷ

      const showComeOut = false // '들어왔습니다/나갔습니다' 사용할지 / 안할지 => 기본으로 사용 안함(false)
      const isMe = true // 사용자 (나) 를 사용할 것인지 확인

      const split = data => data.split(',')

      const raw = reader.result.split('"\n20')
      const columns = raw.splice(0, 1)
      const result = []

      for (let i = 0; i < raw.length; i++) {
        const chat = raw[i]
       
        const string = split(chat.replace(/"/g, ''))
        const object = { createTime: '20' + string[0], name: string[1], content: string[2], isMe }
        const test = /들어왔습니다|나갔습니다/g.test(object.content)
        
        // '들어왔습니다/나갔습니다' 사용 안하기
        // console.log(test, test ? object.content : '')
        if (!showComeOut) { if (test) continue }

        // console.log('아니 이건 나와야지')
        result.push(object)
      }


      console.log(result)
      // console.log(raw, columns)
      // columns.split

    }
  }

  return <input type="file" onChange={changeEvent}/>
}
