import React from 'react'
import CardPart from '../card-part'
import MissionPart from '../mission-part'
import StaticPart from '../static-part'
import TopPart from '../top-part'
import {Helmet} from "react-helmet";
 
const HomePage = () => {
  return (
    <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Home Page</title>
                
            </Helmet>

      <TopPart/>
      <StaticPart/>
      <MissionPart/>
      <CardPart/>
      
    </div>
  )
}

export default HomePage