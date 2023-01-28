import React from 'react'
import './index.scss'
import { Formik, Form, Field } from 'formik';
import { SignupSchema } from './schema';
import axios from 'axios';
import {Helmet} from "react-helmet";

const AddPage = () => {
  return (
    
    <div className='add'>
         <Helmet>
                <meta charSet="utf-8" />
                <title>Add Page</title>
                
            </Helmet>
        <h1>ADD NEW ITEMS</h1>
     <Formik
       initialValues={{
        img:'',
        price:'',
        title:''
       }}
       validationSchema={SignupSchema}
       onSubmit={(values,{resetForm}) => {
        console.log(values);
         axios.post('http://localhost:8000/logistics',values)
         resetForm()
       }}
     >
       {({ errors, touched }) => (
         <Form>
           <Field name="img" placeholder='Add Image (Just Link !!!)'/>
           {errors.img && touched.img ? (
             <div className='err'>{errors.img}</div>
           ) : null} <br /><br />
           <Field name="price" placeholder='Add Price'/>
           {errors.price && touched.price ? (
             <div className='err'>{errors.price}</div>
           ) : null} <br /><br />
           <Field name="title" placeholder='Add Title'/>
           {errors.title && touched.title ? (
             <div className='err'>{errors.title}</div>
           ) : null} <br /><br />
   
           <button type="submit">ADD</button>
         </Form>
       )}
     </Formik>
    </div>
  )
}

export default AddPage