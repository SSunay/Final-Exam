import React from 'react'
import './index.scss'
const TopPart = () => {
  return (
    <div className='topPart'>
        <div className='main'>
            <div className='txtPart'>
                <h5>WELCOME TO LOGISTICO</h5>
                <h1>A TRULY GLOBAL <br /> SERVICE PROVIDER</h1>
                <h5>WE MAKE YOUR CARGO TRANSPORT SIMPLE</h5>
                <button className='top'>EXPLORE US</button>
            </div>
            <div className='inputPart'>
                <div className='back'>
                    <h1>Get a quick offer</h1>
                    <h5>We make your cargo transport simple</h5>
                <label htmlFor="cars">TRUCKLOAD</label><br />
                <select name="cars" id="cars">
                <option value="volvo">Select</option>
                <option value="volvo">Volvo</option>
                 <option value="saab">Saab</option>
                 <option value="mercedes">Mercedes</option>
                 <option value="audi">Audi</option>
                </select><br /><br />

                <label htmlFor="cars">COMMODITY</label><br />
                <select name="cars" id="cars">
                <option value="volvo">Select</option>
                <option value="volvo">Volvo</option>
                 <option value="saab">Saab</option>
                 <option value="mercedes">Mercedes</option>
                 <option value="audi">Audi</option>
                </select><br /><br />
                <label htmlFor="">DISTANCE (MILES)</label><br />
                <input type="text"  placeholder='Write distance'/>
                <h1>ESTIMATE COST: <span>10.0000$</span></h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopPart