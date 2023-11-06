import React, { useContext } from 'react'
import {Link} from "react-router-dom"
import { ContextSum } from './ContextAPI.js'
function Api() {
    const context = useContext(ContextSum);
    const {data,error}= context;
  return (
    <div>Api
    {error}
    
    {data.map((item,id)=>{
     
      
        if(id<=10){
       return <li key={item.id}><button><Link to = {`/useparam/${item.id}`}>{item.id}</Link></button> <br/> {item.title}<br/> {item.body}</li>
    }
    })}
    
    </div>
  )
}

export default Api