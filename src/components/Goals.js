import React, {useState} from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 8px;
  /* box-shadow: 0px 0px 10px 5px lightgrey; */
  border-radius: 5px;
  /* padding: 8px 2px; */
`
const Text = styled.div`
  display: flex;
  width: 95%;
  justify-content: flex-start;
  padding: 8px 8px;
  text-align: left;
`
const Remove = styled.div`
  display: flex;
  width: 5%;
  color: red;
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

      <Text>
        {
          isEditing ? <input value={newText} onKeyUp={onKeyPress} onChange={onChange} /> : <span onClick={() => setIsEditing(true)}>{text}</span>
        }
      </Text>

      <Remove>
        <div onClick={() => removeItem(id)}>x</div>
      </Remove>

    </Wrapper>
  )
}