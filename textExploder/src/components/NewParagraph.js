import React, { useState } from 'react'
import styled from 'styled-components'
import uuid from 'uuid'

import List from './List'
import Goals from './Goals'
import Modal from './Modal'
import Button from './Button'
import TextInput from './Text'

const Wrapper = styled.div`
  /* border: solid; */
`

const InnerWrapper = styled.div`
  border: solid;
  padding: 20px;
  margin-bottom: 4px;
`

const ButtonContainer = styled.div`
  display: flex;
  margin: 0px -4px;
`

const TemplateSelectContainer = styled.div`
  display: flex;
`

const TemplateOption = styled.div`
  flex-wrap: wrap;
  border: solid;
  padding: 10px;
  margin: 10px;
  color: ${({active}) => active ? 'black' : 'grey'}
`

const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  text-align: left;
  width: 100%;
  margin: 20px;
  margin-left: 0px;
  font-weight: bold;
`

const DoneButton = styled.div`
  width: 100%
  display: flex;
  justify-content: flex-end;
`

export default function({addItem, removeItem, setAdd, templates}) {

  const [flowStep, setFlowStep] = useState(0)
  const [label, setLabel] = useState('Add a label...')
  const [goals, setGoals] = useState([{id: uuid(), text: 'Introduce Topic'}])
  const [template, setTemplate] = useState(false)

  const addParagraph = () => {
    let newParagraph = {}

    if (template) {
      newParagraph = {...template, goals: {v1: [...goals]}, label}
    } else {
      newParagraph = { label, goals: {v1: [...goals]}, snippets: [], sentences: {v1: []}}
    }

    addItem(newParagraph)
  }

  const selectTemplate = (selectedTemplate) => {

    if (template && (selectedTemplate.id === template.id)) {

      const newGoals = clearGoals(template)

      setTemplate(false)
      setGoals([...newGoals])

    } else if (template) {

      const newGoals = clearGoals(template)

      setTemplate(selectedTemplate)
      setGoals([...selectedTemplate.goals.v1, ...newGoals])
    } else {
      setTemplate(selectedTemplate)
      setGoals([...selectedTemplate.goals.v1, ...goals])
    }

  }

  const clearGoals = (template) => {
    return goals.filter((newGoals) => {
      let keepGoal = true;
      template && template.goals.v1.forEach(templateGoals => {
        if (templateGoals.id === newGoals.id) keepGoal = false
      })
      return keepGoal
    })
  }


  const addGoal = ({text, id}) => {
    let newGoals = []
    if (id) {
      newGoals = goals.map((goal) => goal.id === id ? {text, id} : goal)
      console.log(" HAD ID", goals.id, id)
    } else {
      console.log(" HAD NO ID")
      newGoals = [...goals, {text, id}]
    }

    setGoals(newGoals)
  }

  return (
    <Wrapper>

      <InnerWrapper>

        <TitleContainer>
          <TextInput text={'Add Label...'} edit={true} init={true} addItemHandler={value => setLabel(value) }/>
        </TitleContainer>

        <TitleContainer>
          Add Template:
        </TitleContainer>

        <TemplateSelectContainer>

        { templates.map(templateItem => (<TemplateOption active={template && template.id === templateItem.id} onClick={() => {
          selectTemplate(templateItem)
          setFlowStep(2)
        }}> {templateItem.label} </TemplateOption>)) }

        </TemplateSelectContainer>

        <TitleContainer>
          Add Goals:
        </TitleContainer>
        <List
          data={goals}
          ItemComponent={Goals}
          newItemProps={{text: 'Add Goal', init: true}}
          addItem={addGoal}
          removeItem={(goalId) => setGoals(goals.filter(({id}) => id !== goalId))}
        />

        {template && <Modal data={template} explode={false} />}

      </InnerWrapper>

      <ButtonContainer>
        <Button text={'Cancel'} onClick={() => setAdd(false)} />
        <Button text={'Back'} onClick={() => setFlowStep(1)} />
        <DoneButton>
          <Button text={'Done'} onClick={addParagraph} />
        </DoneButton>
      </ButtonContainer>


    </Wrapper>
  )
}