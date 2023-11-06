import   {useState}from 'react'
import "./Todolist.css"
import axios from "axios"
//import { Link } from 'react-router-dom'

 function Todolist() {
    const data = {userdata:""}
    const [user,setUser]= useState([])
    const [listData,setlistData]=useState(data)
    const handler = (e)=>{
       setlistData([{...listData,[e.target.name]:e.target.value}])
    }
    function addActivity(){
       // setlistData([...listData,userdata],
            // const upDatedList =[...listData,activity]
            // console.log(upDatedList)
          //  setUserdata("") );
            // return upDatedList
            
            axios.post("http://localhost:3084/api/tododata",listData)
            .then((res) => console.log(res))
            .catch((error) => console.error(error))
            // axios.get("http://localhost:3084/api/tododata")
            // .then((res) => setUser(res.data))
            // .catch((error) => console.error(error))
       
    }
    function removeActivity(i){
        const updatedListData=listData.filter((elem,id)=>{
            return i!=id;
 
                })
            setlistData(updatedListData);
            }
     function removeAll(){
        setlistData([])
     }       
  return (
    <div>
    <div className="container">
    <div className="header"> TODO LIST</div>
     <input type="text" placeholder="Add Activity" name = "userdata" onChange={handler}/>
     <button onClick={addActivity}>Add</button>
     <p className="List-heading"> Here is my List:{")"}</p>
     {listData.length>0 && listData.map((data,i)=>{
        return(
            
            <p key={i}> <div className="listData">{data}</div>
            <div className="btn-position"><button onClick={()=>removeActivity(i)}>remove(-)</button></div>

            </p>
        )
        
        
    
        
     })}
     {listData.length>=1 && 
     <button onClick={removeAll}> remove all</button>}
    </div>
        </div>
  )
}
export default Todolist