import React from 'react'

// export default function Card(props) {   //props passed inside the component
export default function Card({userName,btnText="View ME"}) {  //used de-structing of obj
  // console.log("props: ",props.userName); 
  
  return (
   <>
   <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
        <img
          src="https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            Title
          </span>
          <h2 className="text-xl font-semibold tracking-wide">{userName}</h2>
        </div>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
          amet
        </p>
        <button className='button m-1 p-1 bg-green-200 text-black'>{btnText}</button>
        {/* <button className='button m-1 p-1 bg-green-200 text-black'>{btnText || "view more"}</button> */}
      </div>
   </>
  )
}


