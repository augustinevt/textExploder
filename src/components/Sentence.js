import React, {useState} from 'react'
import styled from 'styled-components'

const Wrapper = styled.span`

  margin-right: ${({mode}) => mode === 2 ? '0px' : '4px'};

  margin-bottom: ${({mode}) => mode === 2 ? '8px' : '8px'};
  margin-right: ${({mode}) => mode === 2 ? '8px' : '0px'};
  padding: ${({mode}) => mode === 2 ? '10px' : '0px'};
  border-radius: 5px;
`
const Text = styled.span`
  text-align: left;
`
const Remove = styled.span`

  width: 5%;
  color: red;
`

export default function({id, text, edit, addItem, removeItem, mode}) {

  const [isEditing, setIsEditing] = useState(edit)
  const [newText, setNewText] = useState(text)

  console.log(mode)

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
    <Wrapper mode={mode}>
      <Text mode={mode}>
        {
          isEditing ? <input value={newText} onKeyUp={onKeyPress} onChange={onChange} /> : <span onClick={() => setIsEditing(true)}>{text}</span>
        }
      </Text>

        { mode === 2 ? <Remove><span onClick={() => removeItem(id)}>x</span></Remove> : null }


    </Wrapper>
  )
}