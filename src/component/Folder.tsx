import * as React from 'react'
import '../style/folder.scss'

type Name = {
  name: string
}

export default function Folder ({ name }: Name) {
  return (
    <div className="folder">
      <span className="folder-back"></span>
      <span className="folder-paper -a"></span>
      <span className="folder-paper -b"></span>
      <span className="folder-paper -c"></span>
      <span className="folder-front"></span>
      <span className="folder-name">{ name }</span>
    </div>
  )
}
