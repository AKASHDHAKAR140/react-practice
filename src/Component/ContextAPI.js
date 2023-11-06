import React, { useState,useEffect} from "react"
import axios from "axios"
export const ContextSum = React.createContext()

  export const ContextAPI = (props)=>{
    const [data,setData]= useState([])
    const [error,setError] = useState(" it gives error");
    
    const Getapi = async()=>{
        try{
     await axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>setData(res.data))
        
    

    }catch(error){
    setError(error.message)
}
    }
    console.log(data)
    useEffect(()=>{
        Getapi();
    },[])

   

 
return (
    <ContextSum.Provider value={{error:error,data:data}}>
     {props.children}
    </ContextSum.Provider>
)

}
