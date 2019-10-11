import React, { useState } from 'react'
import styled from 'styled-components'
import uuid from 'uuid'

import List from './List'
import DocumentThumb from './DocumentThumb'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px;
`

export default function({ data, onSelect, addDocument, removeDocument }) {

  return (
    <Wrapper>
      Documents
      <List
        data={data}
        itemProps={{onSelect}}
        newItemProps={{name: 'Add name here', init: true}}
        ItemComponent={DocumentThumb}
        addItem={addDocument}
        removeItem={removeDocument}
      />
    </Wrapper>
  )
}


