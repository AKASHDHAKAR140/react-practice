import React from 'react'
import {useState,useEffect,useContext} from "react"
import { ContextSum } from './ContextAPI.js';
import { useParams } from 'react-router-dom'
import { useNavigate,Link} from 'react-router-dom';
function Useparams() {
 const navigate = useNavigate();
  const [user,setUser] = useState([])
    const {id} = useParams();
   console.log(id)
    const context = useContext(ContextSum);
    const {data,error} = context;
   useEffect(()=>{
    const list = data.filter(data=>data.id==id) 
     setUser(list?.[0])
     //console.log("11111111111111",list?.[0])
   },[])
   //console.log(" user///////",user)
   console.log("gfd000000000000000000002222222221111111333333333336444444")

  return (
    <div>
    <p>{error}</p>
        
    <button > <Link to ="/"> go to back</Link></button>
    {user.id} <br/> {user.title} <br/> {user.body}</div>
  )
}

export default Useparams