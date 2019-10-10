import Modal from './components/Modal'
import Document from './components/Document'
import Documents from './components/Documents'

const dummyDocumentStore = {
  'di78fscd9':{
    name: 'Actor Network Theory',
    id: 'di78fscd9',
    paragraphs: [{
          label: 'init',
          id: '0',
          goals: {
            v1: [
              { id: 1, text: 'Food is good.'},
              { id: 30, text: 'Food is poop.'},
              { id: 31, text: 'Food is snoopdog.'}
            ],
            v2: [
              {text: 'v1', id: 23},
              {text: 'explain uondl', id: 35},
              {text: 'concddlude', id: 67},
            ],
          },
          sentences: {
            v1: [
             {text: 'alley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also th', id: 23},
             {text: 'alley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also th', id: 35},
             {text: 'alley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also th', id: 67},
             {text: 'alley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also th', id: 69},
             {text: 'alley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also th', id: 68},
            ],
            v2: [
              { id: 1, text: 'Food is fruad.'},
              { id: 30, text: 'Food is meat.'},
              { id: 31, text: 'Food is plant.'}
            ]
          },
          snippets: [
            { id: 24, text: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recentl'},
            { id: 25, text: 'sneaky is the foochamp'},
            { id: 20, text: 'I\'m a little bitch'}
          ],
          templates: []
        }]
  },
  'FD#D#FDd9':{
    name: 'My Blog Deluxe',
    id: 'FD#D#FDd9',
    paragraphs: [{
          label: 'init',
          id: '0',
          goals: {
            v1: [
              { id: 1, text: 'Food is good.'},
              { id: 30, text: 'Food is poop.'},
              { id: 31, text: 'Food is snoopdog.'}
            ],
            v2: [
              {text: 'v1', id: 23},
              {text: 'explain uondl', id: 35},
              {text: 'concddlude', id: 67},
            ],
          },
          sentences: {
            v1: [
             {text: 'alley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also th', id: 23},
             {text: 'alley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also th', id: 35},
             {text: 'alley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also th', id: 67},
             {text: 'alley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also th', id: 69},
             {text: 'alley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also th', id: 68},
            ],
            v2: [
              { id: 1, text: 'Food is fruad.'},
              { id: 30, text: 'Food is meat.'},
              { id: 31, text: 'Food is plant.'}
            ]
          },
          snippets: [
            { id: 24, text: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recentl'},
            { id: 25, text: 'sneaky is the foochamp'},
            { id: 20, text: 'I\'m a little bitch'}
          ],
          templates: []
        }]
  },
}

const dummyDocumentList = [
  {
    name: 'Actor Network Theory',
    id: 'di78fscd9',
  },
  {
    name: 'My Blog Deluxe',
    id: 'FD#D#FDd9',
  }
]


export default {
  dummyDocumentList,
  dummyDocumentStore,
  Document,
  Documents,
}

/////////////////
// import React, { useState } from 'react'
// import styled from 'styled-components'

// const Claus = styled.div`
//   transition: all .5s;
//   margin: ${props => (props.expanded ? "40px" : "10px")};
//   color: ${props => (props.expanded ? "red" : "orange")};
// `
// const Goal = styled.div`
//   transition: all .5s;
//   opacity: ${props => (props.expanded ? 1 : 0 )};
// `
//
// const Wrapper = styled.div`
//   transition: all 1s ease-in-out;
// `
//
// function App() {
//   const [expanded, setExpanded] = useState(false)
//
//   const toggleExpanded = () => {
//     setExpanded(!expanded)
//   }
//
//   return testText.map((fragment) => (
//     <Wrapper>
//
//     </Wrapper>
//     )
//   )
// }

// <Claus expanded={expanded} onClick={() => toggleExpanded() } >
//   <div className='body'> {fragment.body} </div>
//   <Goal expanded={expanded} > {fragment.goal} </Goal>
// </Claus>