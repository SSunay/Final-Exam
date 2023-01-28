import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './index.scss'
import {Helmet} from "react-helmet";

const Detail = () => {
    const[detail,setDetail]=useState([])
const {_id}=useParams()
const navigate = useNavigate()
    const getData=async()=>{
        let data = await axios.get(`http://localhost:8000/logistics/${_id}`)
        setDetail(await data.data)
    }
    useEffect(() => {
   getData()
    }, [])


const handleDelete=(_id)=>{
    axios.delete(`http://localhost:8000/logistics/${_id}`)
    let newData = detail.filter((q)=>q._id !== _id)
    setDetail(newData)
}

  return (
    <div className='detail'>
          <Helmet>
                <meta charSet="utf-8" />
                <title>Detail page</title>
                
            </Helmet>
        <div className='main'>
            <div className='detailImg'><img src={detail.img} alt="" /></div>
            <div className='detailtxt'>
                <h1><span>Title:</span><br />{detail.title}</h1>
                <h3><span>Price:</span><br />{detail.price} $</h3>
                <div className='btn'>
                    <button className='delete' onClick={()=>handleDelete(_id,navigate('/'))}>Delete</button>
                    <button className='back' onClick={()=>navigate('/')}>Go Back</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Detail