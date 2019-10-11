import React, {useState} from 'react'
import styled from 'styled-components'

const Wrapper = styled.span`

  display: ${({mode}) => mode === 2 ? 'flex' : 'inline'};
  margin-right: ${({mode}) => mode === 2 ? '0px' : '4px'};
  /* border: ${({mode}) => mode === 2 ? 'solid' : 'none'}; */
  line-height: ${({mode}) => mode === 2 ? '50sspx' : 'normal'};
  margin-bottom: ${({mode}) => mode === 2 ? '8px' : '9px'};
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

const Inter = styled.span`
  color: grey;

  &:hover {
    color: black;
  }

  &:active, &:focus {
    color: black;
    border: none;
    outline: none;
  }
`

export default function({id, text, edit, init, addItem, removeItem, mode}) {

  const [isEditing, setIsEditing] = useState(edit)
  const [newText, setNewText] = useState(text)

  const onChange = ({target: {innerHTML}}) => {
    setNewText(innerHTML)
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
          <Inter
            edit={true}
            init={init}
            contentEditable={true}
            dangerouslySetInnerHTML={{__html: text}}
            onKeyUp={onKeyPress}
            onBlur={addItemHandler}
            onInput={onChange}
          />
        }
      </Text>

        { mode === 2 ? <Remove><span onClick={() => removeItem(id)}>x</span></Remove> : null }

    </Wrapper>
  )
}
