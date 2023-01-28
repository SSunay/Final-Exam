import React, { useState } from 'react'
import { useEffect } from 'react'
import './index.scss'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Search from '../../components/search'
const CardPart = () => {
    const[card,setCard]=useState([])
  const[toggle,setToggle]=useState(true)
    const getData=async()=>{
        let data = await axios.get('http://localhost:8000/logistics')
        setCard(await data.data)
    }
    useEffect(() => {
   getData()
    }, [])
    
const handleSort=(Obj)=>{
  setToggle(!toggle)
  if(toggle){
    let sort = Obj.sort((a,b)=>Number(a.price)-Number(b.price))
    setCard([...sort])
  }else{
    getData()
  }
}

  return (
    <div className='main'>
          <Search setCard={setCard}/>

        <div className='allcard'>
       <div className='sort'> <button onClick={()=>handleSort(card)} id='sort'>Sort by price</button></div>
            {card.map((el)=>{
                return(
                  <Link to={`home-page/${el._id}`}>
                    <div className='card'>
                        <div className='cardImg'><img src={el.img} alt="" /></div>
                        <div className='cardText'>
                            <h4>{el.price} $</h4>
                            <h1>{el.title}</h1>
                        </div>
                    </div>
                  </Link>
                )
            })}
        </div>
    </div>
  )
}

export default CardPart