import React from 'react'
import ChatList from '../component/ChatList'
// import Input from '../component/Input'

export default function Home () {
  const numbers = [1, 2, 3, 4, 5]
  const listItems = numbers.map((number) => {
    return (
      <ChatList
        key={number.toString()}
        value="안녕하세요?\n\n안녕하세요"
      />
    )
  })
  return (
    <div>
      <ul className="chart-list">
        { listItems }

      </ul>
      {/* <Input></Input> */}
    </div>
  )
}
