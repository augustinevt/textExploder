import React, { useState, useLayoutEffect } from 'react'
import styled from 'styled-components'

import List from './List'
import Sentence from './Sentence'
import Goals from './Goals'
import Snippet from './Snippet'

export default function({data}) {
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

  return (
    <div>
      <button onClick={() => setVersion('v1')}> v1 </button>
      <button onClick={() => setVersion('v2')}> v2 </button>

      <List
        data={goals[version]}
        ItemComponent={Goals}
        addItem={(val) => addUpdate(val, goals, setGoals, true)}
        removeItem={(goalId) => setGoals({...goals, [version]: goals[version].filter(({id}) => id !== goalId)})}
      />
      <List
        data={sentences[version]}
        ItemComponent={Sentence}
        addItem={(val) => addUpdate(val, sentences, setSentences, true)}
        removeItem={(sentenceId) => setSentences({...sentences, [version]: sentences[version].filter(({id}) => id !== sentenceId)})}
      />
      <List
        data={snippets}
        ItemComponent={Snippet}
        addItem={(val) => addUpdate(val, snippets, setSnippets, false)}
        removeItem={(snippetsId) => setSnippets(snippets.filter(({id}) => id !== snippetsId))}
      />
    </div>
  )
}