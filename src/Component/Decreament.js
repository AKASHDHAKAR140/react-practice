import React from 'react'
import  Usecustom from "../CustomHook/Usecustom"
function Decreament() {

    const {count,increament,decreament} = Usecustom();
  return (
    <div>
    
    <button onClick={increament}> + </button>{count} in
    <button onClick={decreament}> - </button>
   
    </div>
  )
}

export default Decreament