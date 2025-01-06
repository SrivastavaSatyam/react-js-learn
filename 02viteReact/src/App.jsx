import { useState } from 'react'
import './App.css'

function App() {

  // let counter = 5
  let [counter,setcounter] = useState(5) // first is variable name second one is funtion that performs on the variable 


  const addValue =() =>{
    // console.log("Value Added",Math.random());
    console.log("Incremented Counter ",counter  )
    // if(counter<20)
    //   counter = counter+1
    setcounter(prevCounter=>prevCounter+1) // values are passed in callback 
    setcounter(prevCounter=>prevCounter+1)
    setcounter(prevCounter=>prevCounter+1)
    
  }
  const removeValue=()=>{
    console.log("Decremented Counter", counter)
    // if(counter>0)
    //   counter=counter-1
    setcounter(counter-1)
  }

  return (
    <>
    <h1>Chai or React Counter App </h1>
    <h2>Counter value: {counter}</h2>

    <button onClick={
      addValue
    } disabled={counter===20}>Add Value</button>
    <br/>
    <button onClick={
      removeValue
    } disabled={counter===0}>Remove Value</button>
    </>
  )
}

export default App
