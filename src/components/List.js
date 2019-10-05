import React, { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 10px;
`

export default function({ItemComponent, data, addItem, removeItem}) {

  const [add, setAdd] = useState(false)

  const addListItem = (val) => {
    addItem(val)
    setAdd(false)
  }

  return (
    <Wrapper>

      <button onClick={() => setAdd(true)}>
        +
      </button>

      {
       data ? data.map((item) => (<ItemComponent {...item} addItem={addListItem} removeItem={removeItem} />)) : "no items"
      }

      {
        add && (<ItemComponent text={''} edit={true} id={77} addItem={addListItem} removeItem={removeItem} />)
      }
    </Wrapper>
  )
}