export default function Home () {
  const changeEvent = (e) => {
    const file = e.target.files[0]

    const reader = new FileReader()
    reader.readAsText(file)
    reader.onload = () => {
      // 콜백지옥 빠져나가기 ㄷㄷ

      const showComeOut = true // 들어왔습니다/나갔습니다

      const split = data => data.split(',')

      const raw = reader.result.split('\n')
      const columns = raw.splice(0, 1)

      const chats = raw.map(chat => {
        const result = split(chat.replace(/"/g, ''))

        // 들어왔습니다/나갔습니다 사용 안하기
        if (showComeOut)

        return { createTime: result[0], name: result[1], content: result[2] }
      })




      console.log(chats)
      // console.log(raw, columns)
      // columns.split

    }
  }

  return <input type="file" onChange={changeEvent}/>
}
