import React, { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`
const Items = styled.div`
  width: 100%;
  margin-bottom: 30px;
`
const AddButton = styled.div`
  border: solid;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  cursor: pointer;
`

const AddButtonContainer = styled.div`
  /* border: solid; */
  padding-top: 20px;
  display: flex;
  width: 100%;
  justify-content: flex-end;
`

export default function({ItemComponent, itemProps, data, addItem, removeItem, NewItemComponent, newItemProps}) {

  const [add, setAdd] = useState(false)

  console.log(newItemProps)

  const addListItem = (val) => {
    addItem(val)
    setAdd(false)
  }

  const InputForm = NewItemComponent ? NewItemComponent : ItemComponent

  return (
    <Wrapper>
      <Items>
        {// NOTE: => fix the data prop!!!
         data ? data.map((item) => (<ItemComponent {...item} {...itemProps} data={item} addItem={addListItem} removeItem={removeItem} />)) : "no items"
        }

        {
          add && (<InputForm text={''} {...itemProps} {...newItemProps} itemProps={itemProps} edit={true} setAdd={setAdd} addItem={addListItem} removeItem={removeItem} />)
        }


        <AddButtonContainer>
          <AddButton onClick={() => setAdd(true)}>
            +
          </AddButton>
        </AddButtonContainer>


      </Items>



    </Wrapper>
  )
}