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

export default function({ data, onSelect }) {

  const [documentList, setDocumentList] = useState(data)

  const addDocument(name) => {
    {
      name: '',
      id: uuid(),
      paragrpahs: []
    }
    
  }

  return (
    <Wrapper>
      Documents
      <List
        data={documentList}
        itemProps={{onSelect}}
        ItemComponent={DocumentThumb}
      />
    </Wrapper>
  )
}


