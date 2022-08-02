import React from 'react'
import Chat from '../component/Chat'

export default function Home () {
  const numbers = [
    { checked: false, name: 'AD', content: '테스트테스트테스트', id: 0 },
    { checked: false, name: 'AD', content: '테스트테스트테스트', id: 1 },
    { checked: false, name: '또야', content: '테스트테스트테스트', id: 2, me: true },
    { checked: false, name: 'AD', content: '테스트테스트테스트', id: 3 },
    { checked: false, name: '또야', content: '테스트테스트테스트', id: 4, me: true },
    { checked: false, name: 'AD', content: '테스트테스트테스트', id: 5 }
  ]

  const listItems = numbers.map((data) => {
    return (
      <Chat
        key={data.id}
        item={data}
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
