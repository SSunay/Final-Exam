import React from 'react'
import './index.scss'
import {NavLink} from 'react-router-dom'
const Header = () => {
  return (
    <div className='navbar'>
        <div className='main'>
            <div className='logo'><NavLink to={'/'}><img src="src/images/logo.png.webp" alt="" /></NavLink></div>
            <div className='links'>
                <ul>
                    <li><NavLink to={'/'}>HOME</NavLink></li>
                    <li><NavLink to={'/'}>ABOUT</NavLink></li>
                    <li><NavLink to={'/'}>SERVICE</NavLink></li>
                    <li><NavLink to={'/'}>BLOG</NavLink></li>
                    <li><NavLink to={'/add-page'}>ADD</NavLink></li>
                    
                </ul>
                <div className='icon'>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin"></i>
                </div>
 

 

 
 

            </div>
            <div className='phone'><i class="fa-solid fa-headphones-simple"></i>10 (87) 237 3784</div>
        </div>
    </div>
  )
}

export default Header