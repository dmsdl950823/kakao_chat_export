export default function Home () {
  const changeEvent = (e) => {
    const file = e.target.files[0]

    const reader = new FileReader()
    reader.readAsText(file)
    reader.onload = () => {
      // 콜백지옥 빠져나가기 ㄷㄷ
      const split = data => data.split(',')

      // const raw = reader.result.split('\n')
      const raw = reader.result
      const enter = raw.indexOf('\n')
      const columns = split(raw.slice(0, enter))
      const test = raw.slice(enter)
      // const columns = split(raw[0])


      // console.log(reader.result.split('\n'))
      console.log(columns)
      console.log(test)
      // columns.split

    }
  }

  return <input type="file" onChange={changeEvent}/>
}
