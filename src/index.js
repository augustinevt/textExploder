import React, { useState } from 'react'

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

function App({open}) {

  console.log(open)

  const [expanded, setExpanded] = useState(false)

  const toggleExpanded = () => {
    setExpanded(!expanded)
  }

  return testText.map((fragment) => (
      <div classname='claus' onClick={() => toggleExpanded() } >
        {expanded ? 'expanded' : 'Collapsed'}
        <div className='body'> {fragment.body} </div>
        <div className='goal'> {fragment.goal} </div>
      </div>
    )
  )
}

export default App;