import React,{useState} from 'react'

function Button({btnColor}) {
    const [color, setColor] = useState("olive")
    const changeBg=()=>{
        // console.log("Color Changed");
        setColor(btnColor)
        // console.log(color);
    }
  return (
    <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:btnColor}} onClick={changeBg}>{btnColor}</button>
  )
}

export default Button