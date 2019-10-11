import React, {useState} from 'react'
import styled from 'styled-components'

const Inter = styled.span`
  color: ${({init}) => init ? 'black' : 'grey'};

  &:hover {
    color: black;

  }

  &:active, &:focus {
    color: black;
    border: none;
    outline: none;
  }
`

export default function({text, id, addItemHandler, edit, init, onClick=()=>{}}) {

  const [newText, setNewText] = useState(text)

  const onChange = ({target: {innerHTML}}) => {
    console.log('=> ', id)
    setNewText(innerHTML)
  }

  const changeHandler = () => {
    addItemHandler(newText)
  }

  const onKeyPress = (e) => {
    if (e.keyCode == 13) {
      event.returnValue = false
      e.preventDefault()
    }
  }

  return (
      <Inter
        onClick={() => !edit && onClick()}
        init={init}
        contentEditable={edit}
        dangerouslySetInnerHTML={{__html: text}}
        onBlur={() => changeHandler()}
        onKeyDown={onKeyPress}
        onInput={onChange}
      />

  )
}
