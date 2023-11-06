import  { useContext } from 'react'
import {ContextSum}  from './ContextAPI.js'
function Increament() {
    const contextsum = useContext(ContextSum);
    const {count,increament,decreament} = contextsum;
    console.log(count);
  
  return (
    <div>Increament
    {count}
    <button onClick={increament}> + </button>
    <button onClick={decreament}> - </button>
    
    </div>
  )
}

export default Increament