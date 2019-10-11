import React, { useState, useLayoutEffect } from 'react'
import styled from 'styled-components'
import uuid from 'uuid'

import List from './List'
import Sentence from './Sentence'
import Goals from './Goals'
import Snippet from './Snippet'

const Wrapper = styled.div`
  margin-bottom: 30px;
  width: 100%;
  box-shadow: 0px 0px 10px 5px lightgrey;
  /* border: solid; */
  padding: 8px;
  position: relative;
`

const ImplodedWrapper = styled.div`
  display: flex;
  margin-bottom: 30px;
  position: relative;
`

const ImplodedText = styled.div`
  /* display: flex; */
`

const ExplodeButton = styled.div`
  display: flex;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0px 10px;
  flex-wrap: wrap;
  align-items: top;
  height: 50px;
  position: absolute;
  right: -45px;
  top: -10px;
  cursor: pointer;
  opacity: 0;

  & div {
    width: 100%
    height: 20px;
  }

  &:hover {
    opacity: 1;
  }
`

const GoalsListWrapper = styled.div`
  /* box-shadow: 0px 0px 10px 5px lightgrey; */
  border-radius: 9px;
  padding: 8px;
  margin-bottom: 40px;
  display:flex;
`
const ListWrapper = styled.span`
  /* box-shadow: 0px 0px 10px 5px lightgrey;
  border-radius: 9px;
  padding: 8px; */
  margin-bottom: 40px;
`

export default function({data, explode=true}) {
  const [exploded, setExploded] = useState(false)
  const [version, setVersion] = useState('v1')
  const [goals, setGoals] = useState(data.goals)
  const [sentences, setSentences] = useState(data.sentences)
  const [snippets, setSnippets] = useState(data.snippets)

  const addUpdate = (val, collection, setCollection, isVersioned) => {

    let update = false;
    let newCollection = isVersioned ? [...collection[version]] : collection

    console.log('add update in modal => ', val)

    newCollection = newCollection.map((item) => {
      if (val.id && item.id === val.id) {
        update = true
        return val
      } else {
        return item
      }
    })

    if (!update) {
      newCollection.push({id: uuid(), text: val.text})
    }

    isVersioned ? setCollection({...collection, [version]: newCollection}) : setCollection(newCollection)
  }

  const getJsx = () => {
    if (exploded) {
      return (
        <Wrapper>
            <ExplodeButton onClick={() => setExploded(false)}>
              <div>&or;</div>
              <div>&and;</div>
            </ExplodeButton>
            <h2>{data.label && data.label}</h2>

            <h3> Goals </h3>
            <GoalsListWrapper>
              <List
                data={goals[version]}
                itemProps={{mode: 2}}
                newItemProps={{text: 'Add Goal text here...', init: true}}
                ItemComponent={Goals}
                addItem={(val) => addUpdate(val, goals, setGoals, true)}
                removeItem={(goalId) => setGoals({...goals, [version]: goals[version].filter(({id}) => id !== goalId)})}
              />
            </GoalsListWrapper>
            <h3> Sentence </h3>
            <ListWrapper>
              <List
                data={sentences[version]}
                itemProps={{mode: 2}}
                ItemComponent={Sentence}
                newItemProps={{text: 'Add Sentence text herde...', init: true}}
                addItem={(val) => addUpdate(val, sentences, setSentences, true)}
                removeItem={(sentenceId) => setSentences({...sentences, [version]: sentences[version].filter(({id}) => id !== sentenceId)})}
              />
            </ListWrapper>
            <h3> Snippets </h3>
            <ListWrapper>
              <List
                data={snippets}
                newItemProps={{text: 'Add Snippet text herde...', init: true}}
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
          <ImplodedText>
            {
              sentences[version].map( sentence =>
                <Sentence
                  {...sentence}
                  mode={1}
                  addItem={(val) => addUpdate(val, sentences, setSentences, true)}
                />
              )
            }
          </ImplodedText>

          {
             explode ?
              <ExplodeButton onClick={() => setExploded(true)}>

                <div>&and;</div>
                <div>&or;</div>

              </ExplodeButton>
            :
              null
          }
        </ImplodedWrapper>
      )
    }
  }

  return getJsx()
}