import React from 'react'
import '../style/chartlist.css'

type AppProps = {
  value: string
}

export default function ChatList ({ value }: AppProps) {
  const setStyle = () => {
    // console.log(textarea)

    return { height: '200px' }
  }

  // const value = '웨구에구에ㅜ에구게ㅜ게우개ㅔㄴ무렝리'

  const textarea = (
    <div className="-list">
      <span className="name">Name</span>

      <textarea
        style={ setStyle() }
        className="-chat"
        value={ value }
        readOnly
      />
    </div>
  )

  return textarea
}