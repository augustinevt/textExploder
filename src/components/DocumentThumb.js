import React, { useState } from 'react'
import styled from 'styled-components'

import TextInput from './Text'

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

export default function({ name, id, onSelect, init, addItem, removeItem, edit }) {

  const [isEditing, setIsEditing] = useState(edit)
  const [newText, setNewText] = useState(name)

  const onChange = ({target: {value}}) => {
    setNewText(value)
  }

  const addItemHandler = (inputVal) => {
    addItem(inputVal)
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

      <TextInput onClick={() => onSelect(id)} text={name} edit={isEditing} init={init} addItemHandler={(val) => addItemHandler(val)} />

      <Remove>
        { !edit && <div onClick={() => removeItem(id)}>x</div> }
        { !edit && <div onClick={() => setIsEditing(true)}>E</div> }
      </Remove>

    </Wrapper>
  )
}


