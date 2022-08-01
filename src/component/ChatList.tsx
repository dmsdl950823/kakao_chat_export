import React from 'react'
import '../style/chartlist.css'

type AppProps = {
  value: string
}

export default function ChatList ({ value }: AppProps) {
  const setStyle = () => {
    return { height: '200px' }
  }

  const textarea = (
    <div className="-chat">
      <textarea
        style={ setStyle() }
        value={ value }
        readOnly
      />
    </div>
  )

  return (
    <li className="-list">
      <div className="-image"></div>

      <div className="-profile">
        <span className="name">Name</span>
        { textarea }
      </div>
    </li>
  )
}
