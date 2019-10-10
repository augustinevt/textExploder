import React, { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px;
`

export default function({ name, id, onSelect }) {

  console.log(id)

  return (
    <Wrapper onClick={() => onSelect(id)}>
      {name}
    </Wrapper>
  )
}


