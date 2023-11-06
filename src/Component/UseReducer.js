import React, { useReducer } from 'react'
const initialstate = 0;
 const reducer=(state,action)=>{
  switch(action){
   case "increment" :
      return state+1
     case "decrement" :
        return state-1 

    default :
    return state    
    }

 }
function UseReducer() {
const [count,dispatch]= useReducer(reducer,initialstate)

  return (
    <div>UseReducer
    
        <button onClick={()=>dispatch("increment")}>+</button>
        {count}
    <button onClick={()=>dispatch("decrement")}>-</button>
    </div>
  )
}

export default UseReducer