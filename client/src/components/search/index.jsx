import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import'./index.scss'
const Search = ({setCard}) => {
const[name,setname]=useState([])
    const getData=async()=>{
        let data = await axios.get('http://localhost:8000/logistics')
        setname(await data.data)
    }
    useEffect(() => {
   getData()
    }, [])

const handleSearch=(e)=>{
    let newList= name.filter((el)=>
    el.title
    .toLocaleLowerCase()
    .includes(e.target.value.toLocaleLowerCase())
    )
    setCard(newList)
}

  return (
    <div className='input'>
        <input type="text" onChange={(e)=>handleSearch(e)} placeholder='Search for your favorite cargo' />
    </div>
  )
}

export default Search