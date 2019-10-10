import React, { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
`

export default function({ItemComponent, itemProps, data, addItem, removeItem, NewItemComponent, newItemProps}) {

  const [add, setAdd] = useState(false)

  const addListItem = (val) => {
    addItem(val)
    setAdd(false)
  }


  const InputForm = NewItemComponent ? NewItemComponent : ItemComponent

  return (
    <Wrapper>

      {// NOTE: => fix the data prop!!!
       data ? data.map((item) => (<ItemComponent {...item} {...itemProps} data={item} addItem={addListItem} removeItem={removeItem} />)) : "no items"
      }

      {
        add && (<InputForm text={''} {...itemProps} itemProps={itemProps} edit={true} id={77} setAdd={setAdd} addItem={addListItem} removeItem={removeItem} />)
      }

      <button onClick={() => setAdd(true)}>
      +
      </button>

    </Wrapper>
  )
}