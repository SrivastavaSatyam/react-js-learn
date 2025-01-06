import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {

  let myObj = {
    userName: "name",
    age:21
  }
  let myArr =[ 1,2,5,4,6]
  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl  mb-4'>Tailwind Test</h1>
     {/* <Card channel="chai aur code"someObj={myObj} someArr = {myArr}/>   props passed through Component */}
     <Card userName="Sam" btnText = "Check User Profile"/>
     <Card userName="SINGH" btnText = "View Profile"/>
     <Card userName="SINGH"/>
    </>
  )
}

export default App
