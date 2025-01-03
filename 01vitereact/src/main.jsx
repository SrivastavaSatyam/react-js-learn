import React from 'react';

import { createRoot } from 'react-dom/client'
import App from './App.jsx'


// creating element using react fuctions
const anotherUser = "Checking Variable inside DOM "
const reactElement = React.createElement(
  'a',
  {href:'https://google.com',
    target:"_blank"
  },
  "Click to visit Google",
  anotherUser // when dom tree is created then Variables are added in the tree also called evaluatted Expression
)

const anotherElement =(
  <a href='https://google.com' target='_blank'>Visit Google</a>
)
const reactCustomElement ={
  type:'a',
  props:{
      href : 'https://google.com',
      target :'_blank'
  },
  children :'Click me to visit Google'
}

function MyApp (){
  return(
    <div>
    <h1>This Is My  custom App</h1> 
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  // reactElement  //Created using the react Function 
  // anotherElement //visible a it is easily converted to the DOM supported by the React i.e it is converted to the tree like structure
  // reactCustomElement  //not visible as it is not rendred correctly as react requires its syntax for rendring elements
  <App/>
  // MyApp()
)
