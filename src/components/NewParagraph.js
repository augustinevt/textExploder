import React, { useState } from 'react'
import styled from 'styled-components'

import List from './List'
import Goals from './Goals'
import Modal from './Modal'

const Wrapper = styled.div`
  border: solid;
`
export default function({addItem, removeItem, setAdd, templates}) {

  const [flowStep, setFlowStep] = useState(0)
  const [label, setLabel] = useState('Add a label...')
  const [goals, setGoals] = useState([])
  const [template, setTemplate] = useState(false)

  const addParagraph = () => {
    let newParagraph = {}

    if (template) {
      newParagraph = {...template, goals: {v1: [...template.goals.v1, ...goals]}, label}
    } else {
      newParagraph = { label, goals: {v1: [...goals]}, snippets: [], sentences: {v1: []}}
    }

    addItem(newParagraph)
  }


  const getJSX = () => {

    if (flowStep === 0) {
      return (
        <div>
        <List
          data={goals}
          ItemComponent={Goals}
          addItem={(newGoal) => setGoals([...goals, newGoal])}
          removeItem={(goalId) => setGoals(goals.filter(({id}) => id !== goalId))}
        />

        <div>
          <button onClick={() => setAdd(false)}>Cancel</button>
          <button onClick={() => setFlowStep(1)}>Templates</button>
          <button onClick={addParagraph}>Done</button>
        </div>

        </div>
      )

    } else if ( flowStep === 1) {

      return (
        <div>
          { templates.map(template => (<span onClick={() => {
            setTemplate(template)
            setFlowStep(2)
          }}> {template.label} </span>)) }

          <div>
            <button onClick={() => setAdd(false)}>Cancel</button>
            <button onClick={() => setFlowStep(0)}>Back</button>
            <button onClick={addParagraph}>Done</button>
          </div>

        </div>
      )

    } else {

      return (
        <div>
          <Modal data={template} />
          <div>
            <button onClick={() => setAdd(false)}>Cancel</button>
            <button onClick={() => setFlowStep(1)}>Back</button>
            <button onClick={addParagraph}>Done</button>
          </div>
        </div>
      )

    }
  }


  return (
    <Wrapper>

      <label> name </label>
      <input value={label} onChange={({target: {value}}) => setLabel(value) }/>

      { template ? `Using template ${template.label}` : 'no template'}

      <button onClick={() => {setTemplate(false); setFlowStep(0)}}> Clear Template </button>


      { getJSX() }

    </Wrapper>
  )
}