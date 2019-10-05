import React, {useState} from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  border: solid;
`
export default function({id, text, edit, addItem, removeItem}) {

  const [isEditing, setIsEditing] = useState(edit)
  const [newText, setNewText] = useState(text)

  const onChange = ({target: {value}}) => {
    setNewText(value)
  }

  const addItemHandler = () => {
    addItem({text: newText, id})
  }

  const removeItemHandler = () => {
    removeItem(id)
  }

  const onKeyPress = (e) => {
    e.preventDefault()
    if (e.keyCode == 13) {
      addItemHandler()
      setIsEditing(false)
    }
  }

  return (
    <Wrapper>

      {
        isEditing ? <input value={newText} onKeyUp={onKeyPress} onChange={onChange} /> : <span onClick={() => setIsEditing(true)}>{text}</span>
      }

      <div onClick={() => removeItem(id)}>x</div>

    </Wrapper>
  )
}