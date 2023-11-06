import React from 'react'
import {useFormik} from "formik"
import validated from './Validtion'

 const initialValues ={
    fname:"",
    lname:"",
    email:"",
    number:"",
 }
function Form() {
const {handleSubmit,handleChange ,errors,touched,handleBlur} = useFormik({
    initialValues:initialValues,
    validationSchema:validated,
    onSubmit: (value)=>{
        console.log(value)

    }
})
 alert("ok bro");
  return (
    <div>
    <form  onSubmit={handleSubmit}>
    <div>
    <input type= "text" placeholder='    fname' name ="fname" onChange={handleChange} onBlur={handleBlur}/><br/><br/>
    {errors.fname && touched.fname ? errors.fname:null}
    </div>
    <div>
    <input type= "text" placeholder='    lname' name ="lname" onChange={handleChange} onBlur={handleBlur}/><br/><br/>
    {errors.lname && touched.lname ? errors.lname:null}
    </div>
    <div>
    <input type= "number" placeholder='  number' name ="number" onChange={handleChange} onBlur={handleBlur}/><br/><br/>
    {errors.number && touched.number ? errors.number:null}
    </div>
    <div>
   
    <input type= "email" placeholder= '  email' name ="email" onChange={handleChange} onBlur={handleBlur}/><br/><br/>
    {errors.email && touched.email ? errors.email:null}
    </div>
    <input type='submit' placeholder="submit" />
    </form>
  </div>
  )
}

export default Form