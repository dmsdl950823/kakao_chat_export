import React from 'react'
import ChatList from '../component/ChatList'
// import Input from '../component/Input'

export default function Home () {
  const numbers = [
    { name: 'AD', content: '테스트테스트테스트', id: 0 },
    { name: 'AD', content: '테스트테스트테스트', id: 1 },
    { name: '또야', content: '테스트테스트테스트', id: 2, me: true },
    { name: 'AD', content: '테스트테스트테스트', id: 3 },
    { name: '또야', content: '테스트테스트테스트', id: 4, me: true },
    { name: 'AD', content: '테스트테스트테스트', id: 5 }
  ]

  const listItems = numbers.map(({ name, content, me, id }) => {
    return (
      <ChatList
        key={id}
        me={me}
        name={name}
        value={content}
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
