import React, { useState, useLayoutEffect } from 'react'
import styled from 'styled-components'

import List from './List'
import Sentence from './Sentence'
import Goals from './Goals'
import Snippet from './Snippet'

const Wrapper = styled.div`
  margin-bottom: 30px;
  width: 100%;
  box-shadow: 0px 0px 10px 5px lightgrey;
  border-radius: 9px;
  padding: 8px;
`

const ImplodedWrapper = styled.div`

`

const GoalsListWrapper = styled.div`
  box-shadow: 0px 0px 10px 5px lightgrey;
  border-radius: 9px;
  padding: 8px;
  margin-bottom: 20px;
  display:flex;
`
const ListWrapper = styled.span`
  /* box-shadow: 0px 0px 10px 5px lightgrey;
  border-radius: 9px;
  padding: 8px; */
  margin-bottom: 20px;
`

export default function({data}) {
  const [exploded, setExploded] = useState(false)
  const [version, setVersion] = useState('v1')
  const [goals, setGoals] = useState(data.goals)
  const [sentences, setSentences] = useState(data.sentences)
  const [snippets, setSnippets] = useState(data.snippets)

  const addUpdate = (val, collection, setCollection, isVersioned) => {

    let update = false;
    let newCollection = isVersioned ? [...collection[version]] : collection

    newCollection = newCollection.map((item) => {
      if (item.id === val.id) {
        update = true
        return val
      } else {
        return item
      }
    })

    if (!update) {
      newCollection.push(val)
    }

    isVersioned ? setCollection({...collection, [version]: newCollection}) : setCollection(newCollection)
  }

  const getJsx = () => {
    if (exploded) {
      return (
        <Wrapper>
            <button onClick={() => setExploded(false)}> implode </button>
            <h2>{data.label && data.label}</h2>
            <button onClick={() => setVersion('v1')}> v1 </button>
            <button onClick={() => setVersion('v2')}> v2 </button>

            <h3> Goals </h3>
            <GoalsListWrapper>
              <List
                data={goals[version]}
                itemProps={{mode: 2}}
                ItemComponent={Goals}
                addItem={(val) => addUpdate(val, goals, setGoals, true)}
                removeItem={(goalId) => setGoals({...goals, [version]: goals[version].filter(({id}) => id !== goalId)})}
              />
            </GoalsListWrapper>
            <ListWrapper>
              <List
                data={sentences[version]}
                itemProps={{mode: 2}}
                ItemComponent={Sentence}
                addItem={(val) => addUpdate(val, sentences, setSentences, true)}
                removeItem={(sentenceId) => setSentences({...sentences, [version]: sentences[version].filter(({id}) => id !== sentenceId)})}
              />
            </ListWrapper>
            <h3> Snippets </h3>
            <ListWrapper>
              <List
                data={snippets}
                itemProps={{mode: 2}}
                ItemComponent={Snippet}
                addItem={(val) => addUpdate(val, snippets, setSnippets, false)}
                removeItem={(snippetsId) => setSnippets(snippets.filter(({id}) => id !== snippetsId))}
              />
            </ListWrapper>
        </Wrapper>
      )
    } else {
      return (
        <ImplodedWrapper>
          <button onClick={() => setExploded(true)}> explode </button>
            {sentences[version].map( sentence =>
              <Sentence
                {...sentence}
                mode={1}
                addItem={(val) => addUpdate(val, sentences, setSentences, true)}
              />
            )}


        </ImplodedWrapper>
      )
    }
  }

  return getJsx()
}