import '../style/chartlist.css'

export default function ChatList ({ value }) {
  const setStyle = (el) => {
    console.log(textarea)

    return { height: '200px' }
  }

  const textarea = (
    <textarea
      style={setStyle}
      className="-chat"
      value={ value }
      readOnly
    />
  )
  return textarea
}