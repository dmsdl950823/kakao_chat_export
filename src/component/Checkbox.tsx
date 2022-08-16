import * as React from 'react'
import '../style/checkbox.scss'

type Content = {
  label: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Checkbox ({ label, onChange }: Content) {
  return (
    <label className="container">
      { label }
      <input type="checkbox" onChange={ onChange }/>
      <span className="checkmark"></span>
    </label>
  )
}
