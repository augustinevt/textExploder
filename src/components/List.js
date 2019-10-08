import React, { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 10px;
`

export default function({ItemComponent, data, addItem, removeItem, NewItemComponent, newItemProps}) {

  const [add, setAdd] = useState(false)

  const addListItem = (val) => {
    addItem(val)
    setAdd(false)
  }

  const InputForm = NewItemComponent ? NewItemComponent : ItemComponent

  return (
    <Wrapper>

      <button onClick={() => setAdd(true)}>
        +
      </button>

      {// NOTE: => fix the data prop!!!
       data ? data.map((item) => (<ItemComponent {...item} data={item} addItem={addListItem} removeItem={removeItem} />)) : "no items"
      }

      {
        add && (<InputForm text={''} {...newItemProps} edit={true} id={77} setAdd={setAdd} addItem={addListItem} removeItem={removeItem} />)
      }
    </Wrapper>
  )
}