import React from 'react'
import {Helmet} from "react-helmet";
import './index.scss'
const PageNotFound = () => {
  return (
    <div className='notFound'>
          <Helmet>
                <meta charSet="utf-8" />
                <title>Not Found</title>
                
            </Helmet>
        <img src="src/images/not-found.webp" alt="" />
    </div>
  )
}

export default PageNotFound