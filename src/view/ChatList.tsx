import React from 'react'
import Chat from '../component/Chat'

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
      <Chat
        key={id}
        me={me}
        name={name}
        content={content}
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