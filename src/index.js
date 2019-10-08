import Modal from './components/Modal'
import Document from './components/Document'


const dummyData = {
  paragraphs: [
    {
     label: 'init',
     id: '0',
     goals: {
       v1: [
         {text: 'intro', id: 23},
         {text: 'explain', id: 35},
         {text: 'conclude', id: 67},
       ],
       v2: [
         {text: 'v1', id: 23},
         {text: 'explain uondl', id: 35},
         {text: 'concddlude', id: 67},
       ],
     },
     sentences: {
       v1: [
         { id: 1, text: 'Food is good.'},
         { id: 30, text: 'Food is poop.'},
         { id: 31, text: 'Food is snoopdog.'}
       ],
       v2: [
         { id: 1, text: 'Food is fruad.'},
         { id: 30, text: 'Food is meat.'},
         { id: 31, text: 'Food is plant.'}
       ]
     },
     snippets: [
       { id: 24, text: 'Chilly Willie eats a philly'},
       { id: 25, text: 'sneaky is the foochamp'},
       { id: 20, text: 'I\'m a little bitch'}
     ]
   }
  ],
  templates:[]
}


export default {
  dummyData,
  Modal,
  Document
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