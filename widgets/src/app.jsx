import React from 'react'
import Accordion from './components/accordion';
import Search from './components/search';

const topics = [{
  id: 'html',
  title: 'Hypertext Markup Language',
  information: `Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser.
  It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript`
},
{
  id: 'css',
  title: 'Cascading Style Sheets',
  information: `Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.
  CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript. `
},
{
  id: 'js',
  title: 'JavaScript',
  information: `JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.
JavaScript is high-level, often just-in-time compiled, and multi-paradigm.`
},
]

const App = () => {
  return (
    <div>
      <br />
      {/* <Accordion topics ={topics} /> */}
      <Search />
    </div>
  )
}



export default App
