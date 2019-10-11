import React, {useState} from 'react'
import styled from 'styled-components'

const Button = styled.div`
  border: solid;
  padding: 10px;
  cursor: pointer;
  margin: 4px;
`

export default function({text, onClick, size}) {

  return (

      <Button onClick={onClick}>
        {text}
      </Button>

  )
}