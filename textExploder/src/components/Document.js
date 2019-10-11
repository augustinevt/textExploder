import React, { useState } from 'react'
import styled from 'styled-components'
import uuid from 'uuid'

import NewParagraph from './NewParagraph'
import List from './List'
import Modal from './Modal'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px;
  flex-wrap: wrap;
`

const DocHeader = styled.div`
  width: 100%;
  flex-wrap: nowrap;
`

const Title = styled.div`
  justify-content: center;
  display: flex;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 40px;
`

const Body = styled.div`
  width: 80%;
`

const templates = [
  {
  label: "Opinion",
  id: 'asdf9d8s09d8f',
    goals: {
     v1: [
       {text: 'v2', id: 23},
       {text: 'Oh the pain', id: 35},
       {text: 'concddlude', id: 67},
     ],
   },
   sentences: {
     v1: [
       { id: 1, text: 'Arco claims to have eaten something like "------"(p. 119)'},
       { id: 30, text: 'Food is poop.'},
       { id: 31, text: 'Food is snoopdog.'}
     ]
   },
   snippets: []
 },

  {
   label: "Support",
   id: '9d8sasdf09d8f',
   goals: {
     v1: [
       {text: 'v1', id: 23},
       {text: 'explain uondl', id: 35},
       {text: 'concddlude', id: 67},
     ]
   },
   sentences: {
     v1: [
       { id: 1, text: 'Food is fruad.'},
       { id: 30, text: 'Food is meat.'},
       { id: 31, text: 'Food is plant.'}
     ]
   },
   snippets: []
 },
]

export default function({ data, back }) {

  const [paragraphs, setParagraphs] = useState(data.paragraphs)

  const addParagraph = (newParagraph) => {
    newParagraph.id = uuid()
    paragraphs.push(newParagraph)
  }

  return (
    <Wrapper>
      <DocHeader>
        <div onClick={() => back()}> &lt; Back </div>
        <Title> {data.name} </Title>
      </DocHeader>
      <Body>
        <List
          data={data.paragraphs}
          ItemComponent={Modal}
          NewItemComponent={NewParagraph}
          newItemProps={{templates}}
          addItem={(val) => addParagraph(val)}
          removeItem={(val) => console.log('')}
        />
      </Body>
    </Wrapper>
  )
}