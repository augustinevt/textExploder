import React, { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px;
`

const Remove = styled.div`
  display: flex;
  width: 5%;
  color: red;
`

export default function({ name, id, onSelect, addItem, removeItem, edit }) {

  const [isEditing, setIsEditing] = useState(edit)
  const [newText, setNewText] = useState(name)

  const onChange = ({target: {value}}) => {
    setNewText(value)
  }

  const addItemHandler = () => {
    addItem(newText)
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
        isEditing ? <input value={newText} onKeyUp={onKeyPress} onChange={onChange} /> : <span onClick={() => onSelect(id)}>{name}</span>
      }

      <Remove>
        { !edit && <div onClick={() => removeItem(id)}>x</div> }
      </Remove>

    </Wrapper>
  )
}


