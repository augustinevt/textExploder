import React, { useState } from 'react'
import styled from 'styled-components'


const testText = [
  {
    body: ["The fox is a simple dog."],
    goal: 'make initial claim'
  },
  {
    body: ["Like most dogs, it has four legs."],
    goal: 'support line one'
  },
  {
    body: ["Like I said, the fox is a simple dog."],
    goal: 'support line one'
  },
]


const Claus = styled.div`
  transition: all .5s;
  margin: ${props => (props.expanded ? "40px" : "10px")};
  color: ${props => (props.expanded ? "red" : "orange")};
`
const Goal = styled.div`
  transition: all .5s;
  opacity: ${props => (props.expanded ? 1 : 0 )};
`

const Wrapper = styled.div`
  transition: all 1s ease-in-out;
`


function App() {
  const [expanded, setExpanded] = useState(false)

  const toggleExpanded = () => {
    setExpanded(!expanded)
  }

  return testText.map((fragment) => (
    <Wrapper>
      <Claus expanded={expanded} onClick={() => toggleExpanded() } >
        <div className='body'> {fragment.body} </div>
        <Goal expanded={expanded} > {fragment.goal} </Goal>
      </Claus>
    </Wrapper>
    )
  )
}

export default App;