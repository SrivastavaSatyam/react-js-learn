import React, { useEffect, useState } from 'react'
import { useLoaderData  } from 'react-router-dom'

function Github() {

    const data = useLoaderData()
    // const [data, setData]  = useState([])

    // useEffect(() => {
    //   fetch('https://api.github.com/users/SrivastavaSatyam')
    //   .then(res => res.json())
    //   .then(data=>{
    //     console.log(data)
    //     setData(data)
    //   })
    // }, [])
    

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Public Repos: {data.public_repos}
    <img width={300}  src={data.avatar_url} alt='Github Image'/>
    </div>
  )
}

export default Github


// adding routes methods (create new file for this )

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/SatyamSrivastava')
    // console.log(response.json());  --> problematic as console log calls the response.json once to consume the values 
    
    return response.json() // will give error as async calls must be awaited and handled but since the value is already consumed hence it gives the error
}
