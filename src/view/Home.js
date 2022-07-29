import ChatList from '../component/ChatList'
import Input from '../component/Input'

export default function Home () {
  const numbers = [1, 2, 3, 4, 5]
  const listItems = numbers.map((number) => {
    return (
      <li className="-list" key={number.toString()}>
        <ChatList value="안녕안녕안녕안녕안ㅇㄹ마ㅣㅇ널;ㄴ마ㅣㅁㄴㅇ라ㅣㅁㄴㅇ러;마널;맞덜;ㅣ만얾; ㅏㄴ러미ㅏㅁㄴ아ㅣ럼;ㅇ나ㅣ러 <br>dkssud" />
      </li>
    )
  })
  return (
    <div>
      <ul className="chart-list">
        { listItems }
        
      </ul>
      <Input></Input>
    </div>
  )
}
